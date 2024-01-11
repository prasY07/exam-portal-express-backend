import express from "express";
import connectToDatabase from './database.js';
import apiRoutes from "./routes/api.js";
import cors from 'cors';
const app = express();


connectToDatabase();
app.use(cors());
app.use(express.json());
app.use('/api/',apiRoutes);
app.listen(5000,()=>{
 console.log('connected to port');
});