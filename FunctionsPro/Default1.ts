
function agecheck(name : string , age : number , eli = "citizen is eligible for 50% concession")
{
    if(age >= 60)
    {
        console.log("Eligibility critieria is : " +eli)
    }
    else
        {
      console.log("pay fill ticket fair")
    }
}

agecheck("Ramana", 61)