import mongoose from "mongoose";

export async function connect(){
    try {
        if(mongoose.connection.readyState === 1){
            return
        }
        await mongoose.connect(process.env.MONGO_URI!,{
            dbName: "mydatabase"
        })
        console.log("connected to MongoDB")
    } catch (error) {
        console.log("MongoDB connection error:", error)
        throw error
    }
}