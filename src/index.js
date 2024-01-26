import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes';
import dotenv from 'dotenv'

dotenv.config()
const {PORT, DB_URL} = process.env
const app = express();


app.use(express.json())
app.use(cors())

mongoose.connect(DB_URL ).then(()=>{
  console.log('connection established')
})

app.use ('/api',router )
app.get('/', (req,res)=>{
  res.send('hey this is my api running')
})


app.listen(PORT, ()=>{
  console.log(`Connected to port ${PORT}`);
})

