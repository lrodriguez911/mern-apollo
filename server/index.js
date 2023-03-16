import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express()
const PORT = process.env.PORT
app.listen(PORT || 3001)
console.log(`Server listening on port : ${PORT}`);