import express from "express";
import configViewEngine from "./config/viewEngine";
import methodOverride from "method-override";
import initWebRoutes from "./route";
import Db from "./config/db/connectDB";

import * as dotenv from "dotenv";

const app = express();
dotenv.config(); // Chay duoc process.env

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//
configViewEngine(app);

initWebRoutes(app);
Db.connect();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
