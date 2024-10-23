import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "automed" // Optional: Use this if you want to specify a database
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
});

export default connection;

