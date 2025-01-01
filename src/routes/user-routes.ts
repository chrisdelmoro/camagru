import { Router, Request, Response } from "express";
import {
  UserCreateController,
  UserDeleteController,
  UserFindOneController,
  UserUpdateController,
} from "../controllers/user-controller";

const userRouter = Router();

userRouter.get("/", UserFindOneController);
userRouter.post("/", UserCreateController);
userRouter.patch("/", UserUpdateController);
userRouter.delete("/", UserDeleteController);

export default userRouter;
