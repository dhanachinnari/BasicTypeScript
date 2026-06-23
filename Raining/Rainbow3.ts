
class colorsofrainbow
{

    violet() : void //non static method
    {
 console.log("Hai i'm violet --> non static method");
 this.red();

    }
static indigo() : void //static method
{
 console.log("Hai i'm Indigo -->  static method");
 this.green();
}
    red() : void //non static method
    {
 console.log("Hai i'm Red --> non static method");
 //indigo();
    }
static green() : void //static method
{
 console.log("Hai i'm Green -->  static method");
 //violet();
}
}

let H = new colorsofrainbow(); //object creation for non static method
colorsofrainbow.indigo(); //calling static method using class name reference
H.violet();

