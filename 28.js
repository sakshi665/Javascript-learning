//spread operator

const array1=[1,2,3];
const array2=[5,6,7];

//const newarr=[...array1,...array2,78];
const newarr=[..."1234567"];
console.log(newarr);

//spread operators in object
//no more keys in one obj
const obj1={
    key1:"value1",
    key2:"value2"
}

const obj2= {
  key3: "value3",
  key4: "value4"
}

// const newobj={...obj1,...obj2};
// console.log(newobj);


const newobj={..."abcdefghijklmnopqrstuvwxyz"};
const newk=[..."abc"];
console.log(newobj);
console.log(newk);