import App from "./app";
import AuthController from "./controllers/auth-controller";
import UsersController from "./controllers/user-controller";

const app = new App([new UsersController(), new AuthController()], 3000);

app.listen();
