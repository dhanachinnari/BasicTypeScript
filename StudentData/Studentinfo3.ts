
class StudentIDDetails
{
    static K : string = "King";
stdid() : void
{
    console.log("The student id is : 12345");
}
}
class StudentmarksDetails extends StudentIDDetails //child class refers to parent class using extends keyword
{
    stdmarks() : void
    {
        console.log("The student marks is : 980");
    }
    static hello() : void
    {
        console.log(this.K);
    }
}

let B = new StudentmarksDetails() //creating object reference for child class
B.stdmarks(); //calling method from child class using child
B.stdid(); //calling method from parent class using child class reference
//console.log(B.K);
let A = new StudentIDDetails()
//console.log(A.Q);
StudentmarksDetails.hello();