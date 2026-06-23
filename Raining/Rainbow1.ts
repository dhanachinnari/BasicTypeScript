
class colorsofrainbow
{
    violet() : void //non static method
    {
 console.log("Hai i'm violet --> non static method");
    }
static indigo() : void //static method
{
 console.log("Hai i'm indigo --> non static method");
}
}
let H = new colorsofrainbow(); //object creation for non static method
H.violet(); //calling non static method using object reference
colorsofrainbow.indigo(); //calling static method using class name reference
H.indigo();