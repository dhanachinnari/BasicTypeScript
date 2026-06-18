
let myCarData : string = "My car name is : I20 and car engine number is 25697890$67%88TUD";

let removenum : string = myCarData.replace(/[0-9]/g, "");

let onlynum : string = myCarData.replace(/[^0-9]/g, "");

let removealp : string = myCarData.replace(/[A-Za-z]/g, "");

let removespl : string = myCarData.replace(/[^0-9A-Za-z]/g, "");

 console.log(removenum);

  console.log(onlynum);

console.log(removealp);

console.log(removespl);
