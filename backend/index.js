import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.json({ extended: true }));
app.use(cors())

// routes
app.use('/auth', authRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})