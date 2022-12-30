import { default as siteRouter } from "./site";

const initWebRoutes = (app) => {
  app.use("/", siteRouter);
};

export default initWebRoutes;
