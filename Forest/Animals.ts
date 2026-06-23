
class Lion
{
     K : string = "king of the forest" //instance variable/non static 
     
     static kids : number = 4; //static variables
     den() : void //created method name of DEN and thsi method is non static method 
     {
        console.log(this.K) //this keyword is used to access the instance/non static variable into non static method
  let C : string = "Brown"; //local variable
  console.log("The color of animal is : " +C);
     }

}
let N = new Lion();

console.log(N.K); //here we are accessing the instance variable using Object reference
console.log("----------------------------------------------------------");
N.den(); //here we are calling the method using Object reference