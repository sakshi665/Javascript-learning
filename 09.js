//undefined 
//null

let firstname;
console.log(firstname);


//if we  declare variable as constant then it should be assigned by something we can do this for let and var


// let myvar=null;
// console.log(myvar);
// myvar="Sakshi";
// console.log(myvar,typeof myvar);
console.log(typeof null);
//it is a bug in js 
//it is not a object it is null


//BigInt

let mynum=123;
console.log(Number.MAX_SAFE_INTEGER);
//if you want number greater than this then use bigint 9007199254740991

let mynumber=BigInt(1234533444123789456);
console.log(mynumber);

//operations with bigint

let num=BigInt(13);
let num2=14n;
console.log(num+num2);

//dont mix bigint with other operator