//how to iterate the objects

const person = {
  name: "Sakshi",
  age: "22",
  "person hobbies": ["guitar", "Playing", "Reading novels"],
};    

//for in loop
//object keys

// for(let key in person){
//     console.log(key);
// // }

// for(let key in person){
//     console.log(person[key]);
// }


// for(let key in person){
//     //console.log(`${key}:${person[key]}`);
//     console.log(key,": ", person[key]);
// }

console.log(Object.keys(person));

for(let key of Object.keys(person))
    {
        console.log(person[key]);
    }


