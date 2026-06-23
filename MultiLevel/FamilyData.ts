
class laxmaiah
{
    lax() : void
{
    console.log("Hai i am father of  SnNTR");
}
 }
class SnNTR extends laxmaiah
{
    sntr() : void
    {
        console.log("Hai i am father of Harikrishna");
    }
}
class Harikrishna extends SnNTR
{
    hari() : void
    {
        console.log("Hai i am father of JnNTR ");
    }
}
class JnNTR extends Harikrishna
{ 
    jntr() : void{
    console.log("Hai i am son of Harikrishna");
}
}
let J = new JnNTR();
J.lax();
let S = new SnNTR();
S.sntr();