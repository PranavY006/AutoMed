import mysql from 'mysql2';

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'automed' // Optional: Use this if you want to specify a database
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
  
  // Close the connection after a successful connection test
  connection.end(err => {
    if (err) {
      console.error('Error disconnecting: ' + err.stack);
      return;
    }
    console.log('Disconnected successfully');
  });
});