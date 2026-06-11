
function multiply(m : number , n : number) : number 
{
    let h : number = m * n;
    return h;
}

//console.log(multiply(14, 3));
let k : number =  multiply(14, 3);
console.log(k)

let p  = (A : number , B : number) : number => A*B; //P is a arrow based function
console.log("The multiply value is : " +p(13, 15));

let stdData = (stdid : number , stdname : string) : void =>
{
    console.log("Student roll number is: " +stdid);
    console.log("Student name is : " +stdname);
}
stdData(503, "Dhana");
