import asyncHandler from 'express-async-handler';
import db from '../config/db_server.js';

// Add the new function for getting all patients

export const getAllPatients = asyncHandler(async (req, res) => {
  const sql = "SELECT * FROM patient";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ Message: "Server side error" });

    return res.json(data);
  });
});

// New function for adding a new patient
export const addPatient = asyncHandler(async (req, res) => {
    const { id, patient_fname, phone, email } = req.body;
    const sql = "INSERT INTO patient (patient_id, patient_fname, phone, email) VALUES (?, ?, ?, ?)";
    db.query(sql, [id, patient_fname, phone, email], (err, data) => {
      if (err) return res.status(500).json({ Message: "Server side error" });
      return res.status(201).json({ Message: "Patient added successfully", patient: { id, patient_fname, phone, email } });
    });
  });
