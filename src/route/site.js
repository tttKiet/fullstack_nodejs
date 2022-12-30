import express from "express";
import siteController from "../controllers/siteController";

const router = express.Router();

router.get("/", siteController.index);

export default router;
