import express from "express";
import apiController from "../controllers/apiController";

const router = express.Router();

router.post("/login", apiController.handleLogin);

export default router;
