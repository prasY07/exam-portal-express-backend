import mongoose from 'mongoose';
import { config as configDotenv } from 'dotenv';
configDotenv();
const connectToDatabase = async () => {
  try {
    const dbString = process.env.dbString;
    await mongoose.connect(dbString);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export default connectToDatabase;
