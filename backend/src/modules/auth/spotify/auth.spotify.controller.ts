import { Request, Response } from "express";
import { getAuthorizationUrl } from "../../../lib/spotify";
import { handleSpotifyCallback } from "../../../services/spotifyService";

export const spotifyController = {
  // redirect the user to Spotify authorize page
  login: (req: Request, res: Response) => {
    // Optional: include a state (e.g., user id or CSRF token). We'll use server-side session or JWT to get userId.
    const url = getAuthorizationUrl();
    res.redirect(url);
  },

  // spotify will call this with ?code=...&state=...
  callback: async (req: Request, res: Response) => {
    try {
      const { code, error } = req.query;
      // Handle error returned by Spotify (e.g., access_denied)
      if (error) {
        console.error("Spotify callback error parameter:", error);
        return res.status(400).send(`Spotify authorization error: ${error}`);
      }
      if (!code) {
        return res.status(400).send("Missing authorization code from Spotify.");
      }
      // You must identify which local user is connecting. This example assumes you have req.user from requireAuth middleware.
      const user = (req as any).user;
      if (!user) return res.status(401).send("Not authenticated");

      await handleSpotifyCallback(user.id, String(code));
      // Redirect back to frontend, maybe to a settings page
      res.redirect(`${process.env.FRONTEND_URL}/spotify/connected`);
    } catch (err) {
      console.error("Spotify callback error:", err);
      res.status(500).send("Spotify callback error");
    }
  }
};