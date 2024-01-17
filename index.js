import express from "express";
import connectToDatabase from './database.js';
import apiRoutes from "./routes/admin.js";
import cors from 'cors';
import webRoutes from "./routes/user.js";
import { verifyAdminByToken } from "./middleware/AdminAuthMiddleware.js";
const app = express();


connectToDatabase();
app.use(cors());
app.use(express.json());
app.use('/api/',apiRoutes);
app.use('/user/',webRoutes);
app.listen(5000,()=>{
 console.log('connected to port');
});