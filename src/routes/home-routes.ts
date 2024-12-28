import { Request, Response, Router } from "express";

const homeRouter = Router();

homeRouter.use("/", (_req: Request, res: Response) => {
  res.send("Website Homepage!!");
});

export default homeRouter;
