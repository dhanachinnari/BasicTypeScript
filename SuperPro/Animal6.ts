
class cow
{
    Speed() : void 
    {
console.log("I am Run more speed of CALF")
    }
}
class calf extends cow
{
    Speed() :  void
    {
        super.Speed() //super keyword used to call the parent method
        console.log("Cald --> Hai i am yet to walk")
    }
}
let G = new calf();
G.Speed()
