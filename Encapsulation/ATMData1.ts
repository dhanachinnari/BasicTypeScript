
class ATMInfo
{
    #pin : number;
    #name : string;
    #balance : number;
    #withdraw : number;

    setpin(userpin : number) : void //its a user pin data from outside ATM
    {
this.#pin = userpin  //3456(userpin) --> 3456b stored into #pin
    }
    getpin() : number 
    {
        return this.#pin
    }
}
class ATMUser
{
    userInfo() : void
    {
    let A = new ATMInfo();
    A.setpin(9090)
    console.log("User pin validated as :" +A.getpin());
    }

}
let B = new ATMUser();
B.userInfo();