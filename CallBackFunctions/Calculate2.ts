
function noofruns() : void
{
let h : number = 0;
for(let k : number = 1 ; k <= 9365415142 ; k++)
{
    h++;
}
console.log(" The for loop runs for : " +h)
}
let a : number = 63
let b : number = 86
setTimeout( () =>
{
noofruns();

})
console.log("The sum of A and B is : " +(a+b))