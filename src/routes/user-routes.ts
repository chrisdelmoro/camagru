import { Router, Request, Response } from "express";
import {
  UserCreateController,
  UserDeleteController,
  UserFindManyController,
  UserFindOneController,
  UserUpdateController,
} from "../controllers/user-controller";
import { authenticateToken } from "../middlewares/auth-middlewares";

const userRouter = Router();

userRouter.get("/:username", authenticateToken, UserFindOneController);
userRouter.get("/", authenticateToken, UserFindManyController);
userRouter.post("/", authenticateToken, UserCreateController);
userRouter.patch("/", authenticateToken, UserUpdateController);
userRouter.delete("/:username", authenticateToken, UserDeleteController);

export default userRouter;
