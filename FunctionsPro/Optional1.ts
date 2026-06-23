
function myData(name : string , aadhar ? : number , age ? : number , address ? : string) //? stands for optional
{
   if(aadhar == undefined)
   {
    console.log("with respect to customer name : " +name+" , not providing the Aadhar number") 
   }
   else
    {
   console.log("with respect to customer name : " +name+" ,  the Aadhar number is:"  +aadhar)
   }
}
myData("Dhana", 12345, 31);