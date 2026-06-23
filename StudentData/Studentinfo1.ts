
class StudentIDDetails
{
stdid() : void
{
    console.log("The student id is : 12345");
}
}


class StudentmarksDetails
{
    stdmarks() : void
    {
        console.log("The student marks is : 980");
    }
marksid() : void
{
    let A = new StudentIDDetails() //creating object reference for StudentIDDetails
    A.stdid(); //calling method using object reference from StudentIDDetails class
}
}

let B = new StudentmarksDetails()
B.stdmarks();
B.marksid();