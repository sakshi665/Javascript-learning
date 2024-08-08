//nested destructuring

const users = [
  { userId: 1, firstName: "Sakshi", gender: "female" },
  { userId: 2, firstName: "Nikita", gender: "female" },
  { userId: 3, firstName: "Tejas", gender: "male" },
];
//we can get different three objects

const [user1, user2, user3] =users;
console.log(user1);
const [{firstName:user1firstname,userId}, ,{gender:user3gender}]=users;
console.log(user1firstname);
console.log(userId);
console.log(user3gender);