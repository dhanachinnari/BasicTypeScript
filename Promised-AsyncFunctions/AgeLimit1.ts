
function ageCheck() : Promise<string>
{
    return new Promise((resolve, reject) =>
         {
        let age : number = 72;
        if(age < 18)
        {
            resolve("Person is not Eligible for voting");
        }
        else
        {
            reject(new Error("Person is Eligible for voting"))
        } 

    })
}
async function ageValidate() : Promise<void>  //async function to call the function
{
    const eligible : string = await ageCheck(); // where we are making the promised function to await
    console.log(eligible);
}
ageValidate();