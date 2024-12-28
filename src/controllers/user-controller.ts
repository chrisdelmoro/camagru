import { Request, Response } from "express";
import { userCreateService } from "../services/user-service";

export const UserFindController = (req: Request, res: Response): void => {
  res.status(200).json(userCreateService);
};

export const UserCreateController = (req: Request, res: Response): void => {
  res.send("UserCreateController accessed!");
};

export const UserUpdateController = (req: Request, res: Response): void => {
  res.send("UserUpdateController accessed!");
};

export const UserDeleteController = (req: Request, res: Response): void => {
  res.send("UserDeleteController accessed!");
};
