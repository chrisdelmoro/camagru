import express from "express";
import cors from "cors";
import router from "./routes";
import dotenv from "dotenv";

const app = express();
const port = 3000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
