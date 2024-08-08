//object literals
//key -> string
//key -> symbol
// const person = {
//     firstName: "Sakshi",
//     age:7,
//     1:"one"
// }

// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);

// for(let key in person){
//     console.log(typeof key);  
// }

// keyvalue pair
// const person =new Map();
// person.set('age',7);
// person.set('firstname','Sakshi');
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// console.log(person);
// console.log(person.get('firstname'));
// console.log(person.get(1));
// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key,typeof key);
// }

// //use for of loop
// for(let [key,value] of person)
//     {
//         console.log(key,value);
//     }


// const person =new Map([['firstname','harshit'],['age','7']]);
// console.log(person);

const person1 = {
    id:1,
    firstname:"Sakshi"
}

//want to add key value pair in this using map

const userinfo =new Map();
userinfo.set(person1, {age:8,gender:"female"});
console.log(userinfo);
console.log(person1.id);
console.log(userinfo.get(person1)); 