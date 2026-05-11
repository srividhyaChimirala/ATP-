import exp from 'express'
export const productApp=exp.Router()
let product=[]
productApp.get(('/product'),(req,res)=>
res.json({message:"all products fetched",payload:product}))

productApp.post('/product',(req,res)=>{
 const newproduct=req.body;
 product.push(newproduct);
 res.json({message:"product created",
    payload:product
 })
}
)


productApp.get('/product/basic',(req,res)=>
    {
        let result=[]
    for(let p of product)
    {
       result.push({name:p.name,
       brand: p.brand})
    }
    res.json(result)
})


productApp.put('/product',(req,res)=>
    {
    let updated=req.body;
    let index = product.findIndex(ele=>ele.productid===updated.productid)
    if(index ===-1)
    {
        res.json({message:"product not found"});
    }
    product.splice(index,1,updated)
   
res.json({message:"product updated",payload:product})
})



productApp.delete('/product/:productid',(req,res)=>{
    let id=Number(req.params.productid)
    let index=product.findIndex(ele=>ele.productid===id)
    if(index===-1)
    {
        res.json({message:"product not found"})
    }
    product.splice(index,1,0)
    res.json({message:"product deleted",payload:product})
})