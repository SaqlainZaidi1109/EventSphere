import express from "express";
import { signinOrganizer, signupOrganizer } from "../controllers/auth.controller.js";

const router = express.Router();



//since we need to create something this is going to be a post request
router.post('/signupOrganizer',signupOrganizer)
router.post('/signinOrganizer',signinOrganizer)

export default router;