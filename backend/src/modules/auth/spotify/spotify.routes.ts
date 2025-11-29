import { Router } from "express";
import { spotifyController } from "./auth.spotify.controller";

const router = Router({ mergeParams: true });

router.get("/login", spotifyController.login);
router.get("/callback", spotifyController.callback);
//router.get("/playlists", spotifyController.getPlaylists);

export default router;