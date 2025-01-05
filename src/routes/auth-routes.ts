import { Request, Response, Router } from "express";
import { UserLoginController } from "../controllers/auth-controller";

const authRouter = Router();

authRouter.post("/", UserLoginController);

export default authRouter;
