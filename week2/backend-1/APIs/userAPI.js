//create mini express app (Separate route)

import exp from 'express'
export const userApp=exp.Router()
let users=[]
//test data (later we will replace this test data with DB)
userApp.get('/users',(req,res)=>{
             // '/users' is the path
            //send response to client by reading all users
           res.json({message:"this resn for ger users req ",payload:users})

            })
// payload-the data being sent from client to srver or server to client 



//=>  Route to handle POST req of Clinent
userApp.post('/users',(req,res)=>{
           // get user from client
           const newUser=req.body
           //push user into users
           users.push(newUser)

           //send res
           res.json("user created")
         })


// Route to handle PUT req of Clinent
userApp.put('/users',(req,res)=>{
         //get modified user from client
         let modifyuser=req.body;

        //get index of exiisting user in user array
        let index=users.findIndex(userobj=>userobj.id===modifyuser.id)
        //if usesr not fiound
        if(index===-1)
        {
            res.json({message:"user not found"})
        }
        //update user using splice
        users.splice(index,1,modifyuser) 
        //send fesponse

        res.json({message:"user updated"})

         })



         // Route to handle DELETE req of Clinent
//url parameter ===argument
         userApp.delete('/users/:id',(req,res)=>{
           //get id of user from url paramete
        let idOfUrl=Number(req.params.id)        //{  y :  3} 
           //find index of user
           let index=users.findIndex(userobj=>userobj.id===idOfUrl) 
           //if user not found
           if(index===-1)
           {
          return res.json({message:"user not found"})
           }
           //delete user by index
           users.splice(index,1) 
           //send res 
            res.json({message:"user removed"})
})





userApp.get('/users/:id',(req,res)=>{
    let idOfUrl=Number(req.params.id)
    let user=users.find(userobj=>userobj.id===idOfUrl)
    if(user===undefined)
    {
        return res.json({message:"user not found"})
    }
userApp.json({message:"a user",payload:user})
})