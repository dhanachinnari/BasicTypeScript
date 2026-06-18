
    let s : string = "";

for( let r : number = 1 ; r <=4; r++) // rows
{

    for(let c : number = 1; c <=15 ; c++)
     {
      s += r+" ";  //adding c of 1  to s(1) and later adding c of 2 to s(12)
     }
      s += "\n"; //s moves to next line

      }

     console.log(s);
