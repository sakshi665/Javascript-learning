const obj1 = {
    key1:"value1",
    key2 : "value2"
}

// const obj2 = {};
//there is one more way to create empty object
// obj2.key3="value3";

//from this we can access obj1
//this is happening
const obj2 =Object.create(obj1);
obj2.key3 = "value3";
obj2.key2= "unique";
console.log(obj2);


//__proto__
//official emascript documentation

//[[prototype]]

//__proto__ ,[[prototype]]


//prototype
//it refers to obj1
console.log(obj2.__proto__);