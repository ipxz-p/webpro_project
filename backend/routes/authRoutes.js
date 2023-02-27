import express from "express";
import {register} from "../controllers/authControllers.js"

const router = express.Router();
router.post("/reg", register)

export default router