
let animals1 : string[] = ["Goat", "Monkey", "Lion", "Tiger", "Kangroo", "Deer", "Elephent"]
let animals2 : string[] = ["Horse", "Zebra", "Cheeta", "Fox", "Bear", "Snak"]

let animals : string[] = animals1.concat(animals2);

//printing based on index
console.log(animals[4]);

//print after concat
console.log(animals);

console.log(animals2);

console.log(animals.indexOf("Tiger"));