import { Router, Request, Response } from "express";
import {
  UserCreateController,
  UserDeleteController,
  UserFindManyController,
  UserFindOneController,
  UserUpdateController,
} from "../controllers/user-controller";

const userRouter = Router();

userRouter.get("/:username", UserFindOneController);
userRouter.get("/", UserFindManyController);
userRouter.post("/", UserCreateController);
userRouter.patch("/", UserUpdateController);
userRouter.delete("/:username", UserDeleteController);

export default userRouter;
