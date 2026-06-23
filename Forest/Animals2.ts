
class Lion
{
     K : string = "king of the forest" //instance variable/non static 
     
     static kids : number = 4; //static variables
     den() : void //created method name of DEN and thsi method is non static method 
     {
        console.log(this.K) //this keyword is used to access the instance/non static variable into non static method
  let C : string = "Brown"; //local variable
  console.log("Non Static --> The color of animal is : " +C);
     }

static kidnames() : void //its a static method
{
   const C : string = "Cubs";
console.log(" Static --> Lion kids are called as : " +C);
}

}

console.log("Static variables --> The lion have kids of : " + Lion.kids);