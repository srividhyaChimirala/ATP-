const products = [
        { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
        { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
        { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
        { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
        { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                ];


export function getProductById(id) {
// Find and return product by ID
return products.find(ele=>ele.id===id)
}
                              
                            
export function getAllProducts() {
// Return all products
for(let p of products)
  {
    console.log(p)
  }
}



export function getProductsByCategory(category) {
// Filter products by category
let usingcategory=products.filter(ele=>ele.category===category)
console.log(usingcategory)
}


export function searchProducts(name) {
// Search products by name (case-insensitive)
return products.find(ele=>ele.name.toLowerCase()===name.toLowerCase())
}


export function checkStock(productId, quantity) {
// Check if product has enough stock
// Return true/false
for(let p of products)
{   
if(p.id===productId)
{
if(p.stock>=quantity)
{
console.log("true")
}
else return "false"
}
}
}


export function reduceStock(productId, quantity) {
// Reduce product stock after purchase
for(let p of products)
{   
if(p.id===productId)
{ 
if(p.stock>=quantity)
{
let r=quantity
let s=p.stock
p.stock =s-r
}
console.log(p)
}
}
}