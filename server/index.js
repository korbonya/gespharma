import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();


app.use(express.json());
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(error => console.log(error));

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}.`);
})