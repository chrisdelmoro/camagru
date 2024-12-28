import { Router, Request, Response } from "express";
import {
  UserCreateController,
  UserDeleteController,
  UserFindController,
  UserUpdateController,
} from "../controllers/user-controller";

const userRouter = Router();

userRouter.get("/", UserFindController);
userRouter.post("/", UserCreateController);
userRouter.patch("/", UserUpdateController);
userRouter.delete("/", UserDeleteController);

export default userRouter;
