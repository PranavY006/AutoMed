import { Router } from "express";
import { getAllPatients , addPatient } from "../../controllers/patient.js";




const router = Router();

// Add the new route for getting all patients
router.get('/patients', getAllPatients);
router.post('/patients', addPatient);

export default router;