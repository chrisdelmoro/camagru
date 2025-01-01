import { Request, Response } from "express";
import {
  userCreateService,
  userFindOneService,
} from "../services/user-service";

export const UserFindOneController = (req: Request, res: Response): void => {
  const found = userFindOneService(req.body.username);

  if (!found) {
    res.status(404).send("User not found!");
  }

  res.status(200).json(found);
};

export const UserFindManyController = (req: Request, res: Response): void => {};

export const UserCreateController = (req: Request, res: Response): void => {
  const created = userCreateService(req.body);

  if (!created) {
    res.status(409).send("User already exists!");
    return;
  }

  res.status(201).json(created);
};

export const UserUpdateController = (req: Request, res: Response): void => {
  res.send("UserUpdateController accessed!");
};

export const UserDeleteController = (req: Request, res: Response): void => {
  res.send("UserDeleteController accessed!");
};
