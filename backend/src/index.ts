import express from 'express';
import authRoutes from "./routes/authroute"
import messageRoutes from './routes/messageroute'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(express.json())

app.use(cookieParser());
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

