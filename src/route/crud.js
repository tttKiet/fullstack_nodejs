import express from "express";
import crudController from "../controllers/crudController";

const router = express.Router();

router.get("/", crudController.index);
router.post("/create-user", crudController.postCRUD);

export default router;
