
class father
{
   bankBalance : number = 15000 //default gives the value to child with private 

}
class son extends father
{
checkBalance() : void
{
    console.log("The child Balance is : " +this.bankBalance)
}
}
class sonFriend
{
checkBalance() : void
{
let T = new father 
console.log(T.bankBalance)
}
}
let k = new sonFriend();
k.checkBalance()