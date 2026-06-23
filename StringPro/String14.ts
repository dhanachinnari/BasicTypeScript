
let language : string = "malayalam";
let eachChar : object = {};

console.log("The number of chars in the string is : " +language.length)

for(let eachRun of language) //runs for 9 times based on each chars
{
    if(eachChar[eachRun]) //storing each char into object
    {
        eachChar[eachRun]++;
}
else
{
    eachChar[eachRun] = 1;  //--> with cahr as m --> assigning eachChar[eachRun] as 1
}

}
    console.log(eachChar);
