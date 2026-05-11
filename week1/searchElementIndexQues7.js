// Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.
//craeting an array 
let arr=[1,2,3,4];
//search element 
let se=7; 
//storing the result in res variable
let res=array(arr,se);  
console.log(res)   
function array(arr,se)
{
   for(let i=0;i<arr.length;i++)
{
    if(arr[i]==se)
    {
        return i;
    }
   
}        
    return("not found");
    
}