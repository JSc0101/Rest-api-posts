import { Router } from "express";
import { getPost } from "../controllers/index.controllers";

const router = Router();
router.get("/", getPost);

export default router;
