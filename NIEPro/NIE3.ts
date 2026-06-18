
let marks : number = 90;

if (marks > 35 && marks < 50)
{
    console.log("Student just passed");
}
else if (marks > 50 && marks < 60)
{
    console.log("Student got second class");
}
else if (marks > 60 && marks < 90)
{
    console.log("Student got first class");
}
else if (marks > 90)
{
    console.log("Student got distinction");
}
else
{
    console.log("Student got failed");
}