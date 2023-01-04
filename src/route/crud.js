import express from "express";
import crudController from "../controllers/crudController";

const router = express.Router();

router.delete("/delete-user", crudController.deleteUser);
router.post("/create-user", crudController.postCRUD);
router.put("/put-user", crudController.putCRUD);
router.get("/edit", crudController.editCRUD);
router.get("/create-user", crudController.index);
router.get("/", crudController.displayCRUD);

export default router;
