import exp from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import {userApp} from './APIs/UserAPI.js'
import {adminApp} from './APIs/AdminAPI.js'
import { authorApp } from './APIs/AuthorApi.js'
import {commonApp} from './APIs/CommonAPI.js'
import cookieParser from "cookie-parser";
import cors from 'cors'

config();

//creating the express app
const app=exp()

//body parser middlewAre
app.use(exp.json())
//cookie-parser middleware
app.use(cookieParser())



app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))





//path level middlewares
app.use("/user-api",userApp)
app.use("/admin-api",adminApp)
app.use("/author-api",authorApp)
app.use("/auth",commonApp)


//assign port
const port=process.env.PORT

//connect to database
//install mongoose

const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL);
        console.log("Database connected")
        const port=process.env.PORT
        //server starts running only after listen
        app.listen(port,()=>console.log(`Server listing on ${port}....`))
    }
    catch(err){
        console.log("Error connecting database")
    }
}

connectDB()



//to handle invalid path
app.use((req,res,next)=>{
    res.status(404).json({message:`path ${req.url} is invalid`})
})


//error handling middleware(must be present at the end of the file only) - only exectes when error is occured
app.use((err,req,res,next)=>{
    console.log(err)
    //validation error
    if(err.name==='ValidationError'){
        return res.status(400).json({message:"Error",error:err.message})
    }
    //cast error
    if(err.name==='CastError'){
        return res.status(400).json({message:"Error",error:err.message})
    }

    //send server side errors
    res.status(500).json({message:"Error from server side",error:err.message})
})