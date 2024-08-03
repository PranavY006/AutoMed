import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO sign (`username`, `position`, `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: "Error hashing password" });
    }

    const values = [
      req.body.username,
      req.body.position,
      hash
    ];

    db.query(sql, [values], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error inserting data into database" });
      }
      return res.status(201).json({ status: "Success", message: "User registered successfully" });
    });
  });
});

app.post('/', (req, res) => {
    const sql = "SELECT * FROM sign WHERE username = ?";
    db.query(sql, [req.body.username], (err, data) => {
      if (err) return res.json({ error: "login error in server" });
      
      if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(),data[0].password,(err,response) =>{
                if(err) return  res.json({ error: "Password compare error" });
                if(response){
                    return res.json({Status: "Success"});
                }else{
                    return res.json({error: "Password Not Match" });
                }
            })
    }else{
        return res.json({ error: "no username existed" });

      }
    });
  });

app.listen(8081, () => {
  console.log("Server running on port 8081");
});



