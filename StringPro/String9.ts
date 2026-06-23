
let myCarData : string = "My car name is : I20 and car engine number is 25697890$67%88TUD";

let removenum : string = myCarData.replace(/[0-9]/g, "");

 console.log(removenum);


