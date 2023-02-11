import express from "express";
import {register, login} from "../controllers/authControllers.js"

const router = express.Router();
router.post("/reg", register)
router.post("/login", login)

export default router