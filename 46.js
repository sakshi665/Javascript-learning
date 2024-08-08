//Find method

const myArray=["Hello","Cat","Dog","Lion"];

function isLength(String){
    return String.length===3;
}
//if length of string is equal to 3 then return true otherwise return false
// const ans=isLength("Dog");
// console.log(ans);

const ans=myArray.find(isLength);
console.log(ans);   


const users = [
  { userId: 1, username: "Sakshi" },
  { userId: 2, username: "Vaish" },
  { userId: 3, username: "Minal" },
  { userId: 4, username: "Samu" },
  { userId: 5, username: "Rohit" },
];

const myUser=users.find((user)=>user.userId===3);
console.log(myUser);
