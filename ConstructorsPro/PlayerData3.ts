
class PlayerInfo
{
    constructor(pid : number)
    {
        this.playerId = pid;  //storing pid value into playerId
    }
playerJersey( pname : string)
{
    console.log("The player Jersey number is : " +this.playerId);
    console.log("The player name is : " +pname);
}
playerGame( pname : string)
{
    console.log("The player Jersey number is : " +this.playerId);
    console.log("The player name is : " +pname);
}
playerState( pname : string)
{
    console.log("The player Jersey number is : " +this.playerId);
    console.log("The player name is : " +pname);
}
}
let T = new PlayerInfo(10);
T.playerGame("sachin")
T.playerJersey("Foiotball")
T.playerState("Maharastra")