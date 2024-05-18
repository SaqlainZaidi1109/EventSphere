import express from "express";
import { test } from "../controllers/user.controller.js";
////in order to create a route we need to import express

const router = express.Router();

//before creating user.controller.js
// router.get('/test',(req,res)=>{
//     res.json({message:"API IS WORKING"})
// })

router.get('/test',test)

export default router;
//as we are exportin as default we can change its name for e.g userRoutes

//we have separate folders for these functions aswell
// (req,res)