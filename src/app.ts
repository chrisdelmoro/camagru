import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();
const port = 3000;

app.use(cors());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
