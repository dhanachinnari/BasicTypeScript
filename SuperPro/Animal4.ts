
class cow
{
    Color = " Hai I am cow and i am white in color"

constructor()
{
console.log(" Parent constructor -->" +this.Color)
}
}
class claf extends cow
{
    Color = "Hai i am calf and i am BROWN in color"
    Colors() : void
    {
       // console.log(" Cow --> " +super.Color)
        console.log("Calf --> " +this.Color)
    }
    constructor()
    {
        super(); //super is used to call parent constructor
    }
}
let H = new claf()
H.Colors();
