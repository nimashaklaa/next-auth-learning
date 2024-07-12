import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL!)
        console.log(`Successfully connect to MongoDB 🥂`)

    }catch(error:any){
        console.error(`Error:${error.message}`)
        process.exit(1) // 1: means exit because of an error
    }
}
export default connectDB;