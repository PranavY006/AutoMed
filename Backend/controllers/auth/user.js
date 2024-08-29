import asyncHandler from 'express-async-handler'
import db from '../../config/db_server.js';
import jwt from 'jsonwebtoken';


const user_auth = asyncHandler(async (req, res) => {
    const sql = "SELECT * FROM auth WHERE user_id = ?";
    db.query(sql, [req.body.user_id], (err, data) => {
      if (err) return res.json({ Message: "Server side error" });
  
      if (data.length > 0) {
        if (req.body.password === data[0].password) {
          const user_id = data[0].user_id;
          const position = data[0].position;
          const token = jwt.sign({ user_id, position }, "our-jsonwebtoken-secret-key", { expiresIn: '1d' });
          res.cookie('token', token);
          return res.json({ Status: "Success", position: position });
        } else {
          return res.status(401).json({ Message: "Invalid user_id or password" });
        }
      } else {
        return res.status(404).json({ Message: "No records existed" });
      }
    });
});

export default user_auth;