
class cow
{
    cowColor = " Hai I am cow and i am white in color"
} 
class claf extends cow
{
    calfColor = "Hai i am calf and i am BROWN in color"
    Colors() : void
    {
        console.log(" Cow --> " +this.cowColor)
        console.log("Calf --> " +this.calfColor)
    }
}
let H = new claf()
H.Colors();
