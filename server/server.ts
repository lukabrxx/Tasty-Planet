import express from "express";
import dotenv from 'dotenv'
import db from "./config/db";
import productRouter from "./routes/productRoutes";

const port = process.env.PORT || 5000
const app = express()

//configs
dotenv.config()
app.use(express.json())
db()

//routes 
app.use('/api/products',productRouter)

//connection to server
app.listen(port, () => {
    console.log(`Server runs on the localhost:${port}`)
})