import express from "express";
import crudController from "../controllers/crudController";

const router = express.Router();

router.post("/create-user", crudController.postCRUD);
router.put("/put-user", crudController.putCRUD);
router.get("/edit", crudController.editCRUD);
router.get("/get", crudController.displayCRUD);
router.get("/", crudController.index);

export default router;
