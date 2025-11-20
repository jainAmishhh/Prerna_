import express from "express";
import { getAllOpportunities } from "../controllers/opportunity.controller.js";

const router = express.Router();

router.get("/", getAllOpportunities);

export default router;
