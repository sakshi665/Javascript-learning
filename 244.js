// objects
//arraysa  are good but now sufficient 
//for real world data
// objects stores key value 
//object don't have index


//how to create objects

// const person={name:"Sakshi",age:"23"};
// console.log(person);

//we can store array in the object
const person={
  name:"Sakshi",
  age:"22",
  hobbies:["guitar","Playing","Reading novels"]
}
console.log(person);

//how to access data of object
console.log(person.age);
console.log(person.name);

//how to add key value pair

person.gender="female";
console.log(person);


//In js key is in String bydefault
console.log(person["name"]);
console.log(person.name);       