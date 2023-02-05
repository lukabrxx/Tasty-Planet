import express from "express";
import dotenv from 'dotenv'

const port = process.env.PORT || 5000
const app = express()

//configs
dotenv.config()
app.use(express.json())


app.get('/',  function(req,res) {
res.send('Hello my friend, from the mighty express server')
})
//connection to server
app.listen(port, () => {
    console.log(`Server runs on the localhost:${port}`)
})