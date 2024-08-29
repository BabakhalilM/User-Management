import express from 'express';
import connectDB from './config/db.js';
import userRouter from './routes/UserRouter.js';
import {} from 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
let app=express();
app.use(cors());


app.use(express.json());
app.use(bodyParser.json()); 
app.use('/api',userRouter);

app.get('/',(req,res)=>{
    res.send("This is home route")
});
const port=process.env.PORT || 3200;
app.listen(port, async(req,res)=>{
    try{
        await connectDB();
        console.log("mongo connected");

    }catch(err){
        console.log(err);
    }
})