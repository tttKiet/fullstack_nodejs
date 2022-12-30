import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route";
import * as dotenv from "dotenv";

const app = express();
dotenv.config(); // Chay duoc process.env

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
configViewEngine(app);
initWebRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
