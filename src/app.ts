import express from "express";
import cors from "cors";
import router from "./routes";
import dotenv from "dotenv";
import { Controller } from "./interfaces";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;
    dotenv.config();

    this.initializeControllers(controllers);
    this.initializeMiddlewares();
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server started at http://localhost:${this.port}`);
    });
  }
}

export default App;

// const app = express();
// const port = 3000;

// dotenv.config();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/", router);

// app.listen(port, () => {
//   console.log(`Server started at http://localhost:${port}`);
// });

// export default app;
