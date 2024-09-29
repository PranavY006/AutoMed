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

export const addPatient = asyncHandler(async (req, res) => {
  const { patient_fname, patient_lname, blood_type, email, gender, age, phone } = req.body;
    const query = 'INSERT INTO patient (patient_fname, patient_lname, blood_type, email, gender, age, phone) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [patient_fname, patient_lname, blood_type, email, gender, age, phone], (err, result) => {
        if (err) {
            console.error('Error inserting data into the database:', err);
            res.status(500).send('Error inserting data into the database');
            return;
        }
        res.status(200).send('Patient added successfully');
    });
});
