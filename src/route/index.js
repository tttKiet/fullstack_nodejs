import { default as siteRouter } from "./site";
import { default as  crudRouter} from "./crud";
import { default as  apiRouter} from "./api";


const initWebRoutes = (app) => {
  app.use("/crud", crudRouter);
  app.use("/api", apiRouter);
  app.use("/", siteRouter);
};

export default initWebRoutes;
