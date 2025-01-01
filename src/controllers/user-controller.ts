import { Request, Response } from "express";
import {
  userCreateService,
  userFindManyService,
  userFindOneService,
  userUpdateService,
} from "../services/user-service";

export const UserFindOneController = (req: Request, res: Response): void => {
  const found = userFindOneService(req.params.username);

  if (!found) {
    res.status(404).send("User not found!");
  }

  res.status(200).json(found);
};

export const UserFindManyController = (req: Request, res: Response): void => {
  res.status(200).json(userFindManyService());
};

export const UserCreateController = (req: Request, res: Response): void => {
  const created = userCreateService(req.body);

  if (!created) {
    res.status(409).send("User already exists!");
    return;
  }

  res.status(201).json(created);
};

export const UserUpdateController = (req: Request, res: Response): void => {
  const updated = userUpdateService(req.body);

  if (!updated) {
    res.status(404).send("User not found!");
    return;
  }

  res.status(200).json(updated);
};

export const UserDeleteController = (req: Request, res: Response): void => {
  res.send("UserDeleteController accessed!");
};
