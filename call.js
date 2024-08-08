//there are three methods in javascript

// call apply Bind 

// const user={
//    firstname : "Sakshi",
//    age:23,
//    about: function(hobby,favMusician){
//       console.log(this.firstname,this.age,hobby,favMusician);
//    }
// }

// const user2 = {
//     firstname :"Raghav",
//     age:23,
// }

// user.about.call(user2,"guitar","moazrt");

//apply
// const user = {
//   firstname: "Sakshi",
//   age: 23,
//   about: function (hobby, favMusician) {
//     console.log(this.firstname, this.age, hobby, favMusician);
//   },
// };

// const user2 = {
//   firstname: "Raghav",
//   age: 23,
// };

// // Function arguments passed as an array
// user.about.apply(user2, ["guitar", "mozart"]);

// // Bind returns a function
// const func = user.about.bind(user2, "guitar", "bach");
// func();


const user1={
  firstname : "Sakshi",
  age: 8,
  about(){
    console.log(this.firstname,this.age);
  }
}

user1.about();