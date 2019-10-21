import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import { uploadMedia } from "../middlewares/uploadMedia";
import TrackController from "../controllers/TrackController";

const router = Router();

//Upload a track to server
router.post("/newtrack", [checkJwt, checkRole(["ADMIN"]), uploadMedia], TrackController.newtrack);

export default router;