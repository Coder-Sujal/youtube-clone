import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
import { app } from "../app.js";

const connectDB = async () =>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
       console.log("Successfully connected to database",connectionInstance.connection.host);
       app.on("error",(error)=>{
        console.log("ERRR:",error);
        throw error;
       })
    }
    catch(error){
        console.log("MongoDB connection FAILED",error);
        process.exit(1);
    }
}

export default connectDB;