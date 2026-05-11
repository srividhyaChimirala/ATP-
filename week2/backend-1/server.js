import exp from 'express'
import  {userApp} from "./APIs/userAPI.js";
import  { productApp} from "./APIs/productAPI.js";
const app=exp()
app.use(exp.json())
//create custom middle wear
function middleware1(req,res,next)
{
    //send res from middleware
    // res.json({message:"this res from middleware1"})
    console.log("middleware 1 executed")
    next()
}
function middleware2(req,res,next)
{
   //send res ffrom middleware
   // res.json({message:"this res from middleware1"})
   console.log("middleware 2 executed")
   next()
}

app.use(middleware1)
app.use(middleware2)
app.use('/user-api',userApp)
app.use('/product-api',productApp)
const port=2000
app.listen(port,()=>{ console.log(`server running succesfully to the port ${port}`)})
//http://localhost:2000
