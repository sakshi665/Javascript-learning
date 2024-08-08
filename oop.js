// We have this user1 but if I want 100 more users data ....there is one problem we can not write this code 100 times 
// better option is we can take this data as a input


// const user1 = {
//     firstname : "Sakshi",
//     lastname :" Gaye",
//     email: "sakshigaye121@gmail.com",
//     age:23,
//     address:"house number,colony,pincode,state",
//     about:function(){
//         return `${this.firstname} is ${this.age} years old` 
//     },
//     is18: function(){
//     return this.age>=18;
//     }
// }

// const aboutuser = user1.about();
// console.log(aboutuser);

//function (that function create objects)
//2  add key value pair
//3 object ko return karega


//now if we are tring to create number of objects but the issue is we have to store functions inside object in memory equal to object count
const usermethods= {
    about : function() {
        return `${this.firstname} is ${this.age} years old` 
    },
  is18 : function(){  
    return this.age >= 18;
  }
}      

function createUser(firstname,lastname,email,age,address){
    const user= {};
    user.firstname = firstname ;
    user.lastname =lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=usermethods.about;
    user.is18=usermethods.is18;
  return user;
}

const user1= createUser('Sakshi','Gaye','sakshigaye121@gmail.com',23,'Hinjewadi');
const user2 = createUser(
  "Raghav",
  "Somani",
  "raghavsomani121@gmail.com",
  24,
  "Mumbai"
);
console.log(user1.about());
console.log(user2.about());

