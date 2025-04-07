import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js';
import Router from './routes/Routes.js';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 4000

app.use(express.json())
app.use('/api/jobs', Router)

app.listen(port, console.log(`Server started on ${port} `))


