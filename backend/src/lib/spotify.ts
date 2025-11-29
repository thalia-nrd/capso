import axios from "axios";
import qs from "qs";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI!;
const BASE_SPOTIFY_TOKEN = "https://accounts.spotify.com/api/token";
const AUTH_BASE = "https://accounts.spotify.com/authorize";

export function getAuthorizationUrl(
  state?: string,
  scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "streaming",
    "user-modify-playback-state",
    "user-read-playback-state"
  ],
  showDialog?: boolean
) {
  const queryObj: any = {
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: scopes.join(" "),
    state,
  };
  if (showDialog) {
    queryObj.show_dialog = true;
  }
  const query = qs.stringify(queryObj);
  return `${AUTH_BASE}?${query}`;
}

export async function exchangeCodeForTokens(code: string) {
  const payload = qs.stringify({
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI
  });

  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const { data } = await axios.post(BASE_SPOTIFY_TOKEN, payload, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
    },
  });

  // data contains access_token, token_type, expires_in, refresh_token, scope
  return data;
}

export async function refreshAccessToken(refreshToken: string) {
  const payload = qs.stringify({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const { data } = await axios.post(BASE_SPOTIFY_TOKEN, payload, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
    },
  });

  // note: sometimes spotify returns no refresh_token in refresh responses
  return data;
}

export async function spotifyGet(url: string, accessToken: string, params: any = {}) {
  const { data } = await axios.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
    params,
  });
  return data;
}