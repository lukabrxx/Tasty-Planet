import mongoose from "mongoose";

const db= async () => {
    try {
        mongoose.set('strictQuery', false) 
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB is connected.')
    } catch(error) {
        console.log(`Error: ${error.message}`)
    }
}

export default db 