import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import bcrypt from 'bcrypt';
import jwt, { decode } from 'jsonwebtoken'; // Import JWT

const saltRounds = 10; // For future bcrypt usage

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ["POST", "GET"], // Corrected methods syntax
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

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ Message: "Token is required, please provide it." });
  } else {
    jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
      if (err) {
        return res.status(403).json({ Message: "Authentication error, invalid token." });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

// Protected route
app.get('/', verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

// Logout route
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({ Status: "Success", Message: "Logged out successfully." });
});

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO sign (`username`, `position`, `password`) VALUES (?)";

  const values = [
    req.body.username,
    req.body.position,
    req.body.password // Store plain text password
  ];

  db.query(sql, [values], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error inserting data into database" });
    }
    return res.status(201).json({ status: "Success", message: "User registered successfully" });
  });
});


app.post('/', (req, res) => {
  const sql = "SELECT * FROM sign WHERE username = ?";
  db.query(sql, [req.body.username], (err, data) => {
    if (err) return res.json({ Message: "Server side error" });

    if (data.length > 0) {
      // For future bcrypt usage, uncomment below
      // bcrypt.compare(req.body.password, data[0].password, (err, result) => {
      //   if (err) return res.status(500).json({ error: "Error comparing passwords" });

      //   if (result) {
            const name = data[0].username;
            const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: "Success" });
      //   } else {
      //     return res.status(401).json({ Message: "Invalid username or password" });
      //   }
      // });

      // Temporarily, if passwords are not hashed, directly compare:
      if (req.body.password === data[0].password) {
        const name = data[0].username;
        const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", { expiresIn: '1d' });
        res.cookie('token', token);
        return res.json({ Status: "Success" });
      } else {
        return res.status(401).json({ Message: "Invalid username or password" });
      }
    } else {
      return res.status(404).json({ Message: "No records existed" });
    }
  });
});

app.listen(8081, () => {
  console.log("Server running on port 8081");
});

