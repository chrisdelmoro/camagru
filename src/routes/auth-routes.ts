import { Request, Response, Router } from "express";
import AuthController from "../controllers/auth-controller";

const authRouter = Router();
const autoController = new AuthController();

authRouter.post("/", autoController.router);

export default authRouter;
