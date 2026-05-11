import { Schema ,model,Types } from "mongoose"
//create cart schema(produuct ,count)
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product" //name of the product moedl
    },
    count:{
        type:Number,
        default:1
    }
})
//create user schema (uzername,password,email,age)
const userSchema=new Schema({
    username:{
        type:String, //type of the feild
        required:[true,"Username is required"],
        minLength:[4,"min length of username is 4 char"],
        maxLength:[6,"max length of username is 6 char"],
       
       // pattern:[/u]
    },
    password:{
         type:String,
         required:[true,"password is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exists"]
    },
    age:{
        type:Number,
          
    },
    cart:[cartSchema],
},
    {
        versionKey:false,
        timestamps:true,
    }
)
//generate usermodel
export const UserModel=model("user",userSchema)
//"user" -it will create users collection in database
