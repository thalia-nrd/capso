import { Request, Response } from "express";
import { getUserPlaylists, getPlaylistTracks, getValidAccessTokenForUser } from "../../../services/spotifyService";

export const mp3Controller = {
  // return list of playlists
  getPlaylists: async (req: Request, res: Response) => {
    try {
      const user = (req as any).user;
      if (!user) return res.status(401).json({ message: "Unauthenticated" });

      const playlists = await getUserPlaylists(user.id);
      res.json({ playlists });
    } catch (err: any) {
      console.error("getPlaylists", err);
      res.status(500).json({ error: err.message || "Server error" });
    }
  },

  // return tracks of a playlist
  getPlaylistTracks: async (req: Request, res: Response) => {
    try {
      const user = (req as any).user;
      const { playlistId } = req.params;
      if (!playlistId) return res.status(400).json({ error: "Playlist ID required" });
      const tracks = await getPlaylistTracks(user.id, playlistId);
      res.json({ tracks });
    } catch (err: any) {
      console.error("getPlaylistTracks", err);
      res.status(500).json({ error: err.message || "Server error" });
    }
  },

  // return an access token to the frontend (valid, refreshed) for Web Playback SDK usage
  getClientToken: async (req: Request, res: Response) => {
    try {
      const user = (req as any).user;
      const token = await getValidAccessTokenForUser(user.id);
      if (!token) return res.status(400).json({ error: "Spotify not connected" });
      // return token (only to authenticated user)
      res.json({ accessToken: token });
    } catch (err: any) {
      console.error("getClientToken", err);
      res.status(500).json({ error: "Server error" });
    }
  }
};