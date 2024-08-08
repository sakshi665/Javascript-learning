//Important array methods

//foreach
//map
//filter
//reduce

// const numbers=[4,2,5,6];

// function myfunc(number,index){
//     console.log(`Index is ${index} Number is ${number}`);
// }

// for(let i=0;i<number.length;i++)
//     {
//         myfunc(number[i],i);
//     }
const numbers = [4, 2, 5, 6];
numbers.forEach(function(number,index){
     console.log(`Index is ${index} Number is ${number*2}`);
});

numbers.forEach(function(number){
    console.log(number*2);
})


const users = [
  { firstName: "Sakshi", age: 23 },
  { firstName: "Mohit", age: 23 },
  { firstName: "Tejas", age: 23 },
  { firstName: "Tanmay", age: 23 },
];

// for(let user of users)
//     {
//         console.log(user.firstName);
//     }

users.forEach((user,index)=>{
    console.log(user.firstName,index);
})