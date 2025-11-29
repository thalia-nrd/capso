import { prisma } from "../infrastructure/database/prisma";
import { exchangeCodeForTokens, refreshAccessToken, spotifyGet } from "../lib/spotify";
import { addSeconds } from "date-fns";

interface SpotifyTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
}

export async function handleSpotifyCallback(userId: number, code: string) {
  const tokenResponse = await exchangeCodeForTokens(code) as SpotifyTokenResponse;
  const accessToken = tokenResponse.access_token;
  const refreshToken = tokenResponse.refresh_token;
  const expiresIn = tokenResponse.expires_in; // seconds
  const scope = tokenResponse.scope;

  const expiresAt = addSeconds(new Date(), expiresIn);

  // Upsert SpotifyAccount for user
  const upsert = await prisma.spotifyAccount.upsert({
    where: { userId },
    update: {
      accessToken,
      refreshToken,
      scope,
      expiresAt,
    },
    create: {
      userId,
      accessToken,
      refreshToken,
      scope,
      expiresAt,
    },
  });

  return upsert;
}

export async function getValidAccessTokenForUser(userId: number) {
  const account = await prisma.spotifyAccount.findUnique({ where: { userId } });
  if (!account) return null;

  const now = new Date();
  if (account.expiresAt > now) {
    return account.accessToken;
  }

  // refresh
  const refreshResp = await refreshAccessToken(account.refreshToken) as SpotifyTokenResponse;
  const newAccessToken = refreshResp.access_token;
  const expiresIn = refreshResp.expires_in;
  const newExpiresAt = addSeconds(new Date(), expiresIn);

  // Spotify may or may not send a new refresh token. Keep old if missing.
  const newRefreshToken = refreshResp.refresh_token ?? account.refreshToken;

  await prisma.spotifyAccount.update({
    where: { userId },
    data: {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      expiresAt: newExpiresAt,
      scope: refreshResp.scope ?? account.scope,
    },
  });

  return newAccessToken;
}

export async function getUserPlaylists(userId: number) {
  const token = await getValidAccessTokenForUser(userId);
  if (!token) throw new Error("Spotify not connected for user");

  const data = await spotifyGet(`https://api.spotify.com/v1/me/playlists`, token, { limit: 50 }) as { items?: any[] };
  return data.items || [];
}

export async function getPlaylistTracks(userId: number, playlistId: string) {
  const token = await getValidAccessTokenForUser(userId);
  if (!token) throw new Error("Spotify not connected for user");

  const data = await spotifyGet(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, token, { limit: 100 }) as { items?: any[] };
  return data.items || [];
}