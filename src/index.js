import express from "express";
import configViewEngine from "./config/viewEngine";
import methodOverride from "method-override";
import initWebRoutes from "./route";
import Db from "./config/db/connectDB";

import * as dotenv from "dotenv";

const app = express();
dotenv.config(); // Chay duoc process.env

//
app.use(methodOverride("_method"));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
configViewEngine(app);

initWebRoutes(app);
Db.connect();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
