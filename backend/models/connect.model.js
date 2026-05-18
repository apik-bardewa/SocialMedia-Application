
import mongoose from "mongoose";
import "dotenv/config";

const connection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        
        console.log("db is connected successfully");
    }catch(err){
      
        console.log("db error",err);
    }
}

export default connection;


