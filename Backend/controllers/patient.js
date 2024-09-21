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

