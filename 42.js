//map method

// const numbers= [3,4,5,2,1]

// const sqaure =function(number){
//     return number*number;
// }

// const sqnum=numbers.map(sqaure);
// console.log(sqnum);

// const numbers = [3, 4, 5, 2, 1];


// const sqnum = numbers.map( function (number) {
//   return number * number;
// });
// console.log(sqnum);

const users = [
  { firstName: "Sakshi", age: 23 },
  { firstName: "Mohit", age: 23 },
  { firstName: "Tejas", age: 23 },
  { firstName: "Tanmay", age: 23 },
];

const userName=users.map((user)=>{
    return user.firstName;
})

console.log(userName);