
class father
{
  #bankBalance : number = 15000 //default gives the value to child with private 

}
class son extends father
{
checkBalance() : void
{
    console.log("The child Balance is : " +this.bankBalance)
}
}
let k = new son();
k.checkBalance()