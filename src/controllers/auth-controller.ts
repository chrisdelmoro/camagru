import { Request, Response } from "express";
import { UserFindOneService } from "../services/user-service";
import { generateAccessToken } from "../services/auth-service";

export const UserLoginController = (req: Request, res: Response): void => {
  const userExists = UserFindOneService(req.body.username);

  if (!userExists) {
    res.status(404).send("Login doesn't exist or some data is wrong!");
    return;
  }

  res.status(200).send(generateAccessToken(userExists.username));
};
