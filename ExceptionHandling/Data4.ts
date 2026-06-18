 let a : number = 91;
 let b : number = 84;
try{
 let c =  new Array(-95);
  console.log("The Array can store number of elements : " +c.length);

}
catch(gettingerror)
{
console.log("The length should not be decimals and should not be negative values")
}
finally
{
  console.log(" The product of A and B is : " +(a*b))
}
 console.log("The difference between A and B is : " +(a-b));