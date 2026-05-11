//Write a function that receives 3 number args and  return the big number
let big=bigger(5,8,9);
console.log(big)
//printing the big number
function bigger(a,b,c)
{   
//checking wheather the a is greater or not if yes a is bigger
    if(a>b &&a>c)  
{
    return ("a is bigger");
}
//checking wheather the b is greater or not if yes b is bigger
else if(b>a&&b>c){                   
    return ("b is bigger");
}
//checking wheather the c is greater or not if yes cis bigger
else {
    return ("c is big");          

}
}