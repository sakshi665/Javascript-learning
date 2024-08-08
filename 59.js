

const usermethods = {
  about: function () {
    return `${this.firstname} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing:function(){
    return 'tere mere';
  },
};

function createUser(firstname, lastname, email, age, address) {
  const user = Object.create(usermethods);
  user.firstname = firstname;
  user.lastname = lastname;
  user.email = email;
  user.age = age;
  user.address = address;
//   user.about = usermethods.about;
//   user.is18 = usermethods.is18;
//   user.sing = usermethods.sing;

  return user;
}

const user1 = createUser(
  "Sakshi",
  "Gaye",
  "sakshigaye121@gmail.com",
  23,
  "Hinjewadi"
);
const user2 = createUser(
  "Raghav",
  "Somani",
  "raghavsomani121@gmail.com",
  24,
  "Mumbai"
);
//we can access usermethod by giving the __proto__ to the object
console.log(user1);
console.log(user1.about());
