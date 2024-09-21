import { Router } from "express";
import { getAllPatients } from "../../controllers/patient.js";



const router = Router();

// Add the new route for getting all patients
router.get('/patients', getAllPatients);

export default router;