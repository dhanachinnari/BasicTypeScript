
class cow
{
    Color = " Hai I am cow and i am white in color"
} 
class claf extends cow
{
    Color = "Hai i am calf and i am BROWN in color"
    Colors() : void
    {
        console.log(" Cow --> " +this.Color)
        console.log("Calf --> " +this.Color)
    }
}
let H = new claf()
H.Colors();
