import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js'

//top level await

export const connectDB = async ()=>{
    try {
        const connec = await mongoose.connect(MONGODB_URI)
        console.log(`MongoDB connected: ${connec.connection.name}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1)
    }
    
}