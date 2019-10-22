import { Router } from "express";
import HookController from "../controllers/HookController";
import { checkHookKey } from "../middlewares/hookAuth"

const router = Router();

router.post("/hook/init", [checkHookKey], HookController.reportInit);
router.post("/hook/shutdown", [checkHookKey], HookController.reportShutdown);
router.get("/hook/next", [checkHookKey], HookController.nextTrack);

export default router;