import express from 'express';
import connection from './models/connect.model.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import "dotenv/config";
// import User from './models/user.model.js';
import userRouter from './routes/user.routes.js';

const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json())
app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use('/api/user',userRouter);


app.listen(process.env.PORT,()=>{
    connection();
    console.log("server is listening at port 8000");
})



