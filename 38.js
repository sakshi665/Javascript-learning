//parameter destructuring

// const person = {
//     firstname: "Sakshi",
//     gender: "female"
// }

// function printdetails(obj)
// {
//     console.log(obj.firstname);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

// printdetails(person);


const person = {
  firstname: "Sakshi",
  gender: "female",
age: 23
};

function printdetails({firstname,gender,age}) {
  console.log(firstname);
  console.log(gender);
  console.log(age);
}

printdetails(person);


