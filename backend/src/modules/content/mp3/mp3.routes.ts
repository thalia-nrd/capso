import { Router } from "express";
import { mp3Controller } from "./mp3.controller";
import { requireAuth } from "../../auth/middleware/auth.middleware";

const router = Router({ mergeParams: true });

router.get("/playlists", requireAuth, mp3Controller.getPlaylists);
router.get("/playlists/:playlistId/tracks", requireAuth, mp3Controller.getPlaylistTracks);
router.get("/token", requireAuth, mp3Controller.getClientToken);

export default router;