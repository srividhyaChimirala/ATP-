//Write a function that receives an array as arg and return their sum
let big=[5,8,9]; 
let sum=sum(big);
console.log(sum)  
function sum(big)
{

let add=0;

for(let i=0;i<big.length;i++)
{
    add+=big[i];
}
return add;
}
