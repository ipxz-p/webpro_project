import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.json({ extended: false }));
app.use(cors({
    origin: ['http://127.0.0.1:5173', 'localhost:3000', 'localhost:8080'],
    credentials: true
}))

// routes
app.use('/auth', authRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})