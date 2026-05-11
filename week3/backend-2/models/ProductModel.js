import { Schema ,model } from "mongoose"

const productSchema=new Schema({
    productid:{
       type:String,
        required:[true,"productid  is required"],
    },
    productName:{
        type:String,
         required:[true,"productname is required"],
    },
    price:{
        type:Number,
         required:[true,"product price is required"],
         min:[10000,"minnimum price is 10000"],
         max:[50000,"maximum price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"productbrand is required"],
    }
 }   ,
    {
        versionKey:false,
        timestamps:true,
    }
      )
      export const ProductModel=model("product",productSchema)
      