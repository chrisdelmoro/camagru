import { Router, Request, Response } from "express";
import UsersController from "../controllers/user-controller";
import { authenticateToken } from "../middlewares/auth-middlewares";

const userRouter = Router();
const userController = new UsersController();

userRouter.get("/:username", authenticateToken, userController.router);
userRouter.get("/", authenticateToken, userController.router);
userRouter.post("/", authenticateToken, userController.router);
userRouter.patch("/", authenticateToken, userController.router);
userRouter.delete("/:username", authenticateToken, userController.router);

export default userRouter;
