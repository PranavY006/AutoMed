import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// middleware
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(cookieParser());

// Importing routes
import loginRoutes from './routes/Login/login_routes.js';

app.listen(8081, () => {
  console.log("Server running on port 8081");
});

app.use('/', loginRoutes);

