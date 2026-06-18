

function Playername(name : string) : void
{
    console.log(name); //to know NAME we are printing 
}
Playername("Dhoni");

function PlayerGame(game : (name : string) => void) : void //(name : string) => void) : void its unnamed function
{
    game("cricket");  //to know GAME we are calling the function
}
PlayerGame(Playername); //calling function under another function 