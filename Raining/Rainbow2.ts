
class colorsofrainbow
{
    R : string = "Red" //instance or non static variable
    static G : string = "Green" //static variable

    violet() : void //non static method
    {
 console.log("Hai i'm violet --> non static method");
 console.log("Non static method accessing , non static variable : " +this.R);
  console.log("Non static method accessing ,  static variable : " +this.G);

    }
static indigo() : void //static method
{
 console.log("Hai i'm indigo -->  static method");
  console.log(" static method accessing , non static variable : " +this.R);
  console.log(" static method accessing ,  static variable : " +this.G);
}
}
let H = new colorsofrainbow(); //object creation for non static method
H.violet(); //calling non static method using object reference
console.log("-------------------------------------------");
colorsofrainbow.indigo(); //calling static method using class name reference
