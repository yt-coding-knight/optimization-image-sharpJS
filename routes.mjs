import { Router } from "express";
import { imageOptimize } from "./controller.mjs";

const router = Router();

router.post("/upload", imageOptimize);

export default router;
