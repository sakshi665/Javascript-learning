//how to clone array
//how to concatenate twwo array

let array1=["item1","item2"];
// let array2=array1.slice(0);
// let array2=[].concat(array1);

//new way
//spread operator
let onemorearray=["item3","item4"];
let array2=[...array1,...onemorearray];

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);
//it will create two diff item in heap
