import { Router } from "express";
import homeRouter from "./home-routes";
import userRouter from "./user-routes";
import authRouter from "./auth-routes";

const router = Router();

router.use("/", homeRouter);
router.use("/user", userRouter);
router.use("/login", authRouter);

export default router;
