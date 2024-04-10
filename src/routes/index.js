import { Router } from "express";

import authRouter from "./auth.js";
import rocketleagueRouter from "./rocketleague.js";
import fileRouter from "./file.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/rocketleague", rocketleagueRouter);

router.use("/uploads", fileRouter);

export default router;