
let fancynumbs: number[] = [56, 9, -10, 78, 34, -17, 61 ]

//console.log(fancynumbs.sort()) //incorect sorting

console.log(fancynumbs.sort((a, b) => a-b)) //print in ascending order

console.log(fancynumbs.sort((a, b) => b-a)) //print in descending order
