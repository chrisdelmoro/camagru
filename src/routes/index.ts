import { Router } from "express";
import homeRouter from "./home-routes";
import userRouter from "./user-routes";

const router = Router();

router.use("/", homeRouter);
router.use("/user", userRouter);

export default router;
