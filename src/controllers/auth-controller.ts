import { Request, Response, Router } from "express";
import { UserFindOneService } from "../services/user-service";
import { generateAccessToken } from "../services/auth-service";

class AuthController {
  public path = "/login";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.post(this.path, this.UserLoginController);
  }

  UserLoginController = (req: Request, res: Response): void => {
    const userExists = UserFindOneService(req.body.username);

    if (!userExists) {
      res.status(404).send("Login doesn't exist or some data is wrong!");
      return;
    }

    res.status(200).send(generateAccessToken(userExists.username));
  };
}

export default AuthController;

// export const UserLoginController = (req: Request, res: Response): void => {
//   const userExists = UserFindOneService(req.body.username);

//   if (!userExists) {
//     res.status(404).send("Login doesn't exist or some data is wrong!");
//     return;
//   }

//   res.status(200).send(generateAccessToken(userExists.username));
// };
