// array destructuring

const myarr= ["value1","value2","value3","value4"];
// let myarr1=myarr[0];
// let myarr2=myarr[1];
// console.log(myarr1);
// console.log(myarr2);

// const [myarr1,myarr2]=myarr;
let [myarr1,myarr3,...mynewarr] = myarr;
//let mynewarr= myarr.slice(2);
//myarr1="value changed";
console.log(myarr1);
console.log(myarr3);
console.log(mynewarr);


