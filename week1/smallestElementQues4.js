// Find the smallest element in marks array
// creating an array with some numbers
let array=[21,53,7];
//initializing the array
let small=array[0];  
for(let i=0;i<array.length;i++)
{
    if(array[i]<small)
    {
        console.log(`smallest elemnet in marks array is:${array[i]}`);
    }
}