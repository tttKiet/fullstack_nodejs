import { default as siteRouter } from "./site";
import { default as  crudRouter} from "./crud";


const initWebRoutes = (app) => {
  app.use("/crud", crudRouter);
  app.use("/", siteRouter);
};

export default initWebRoutes;
