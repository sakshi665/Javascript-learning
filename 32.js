// Hoisting

//In case of funtion declaration we can call funtion before declaration
hello();

function hello()
{
    console.log("hello Sakshi...");

}

//In case of funtion expression it won't happened
//Cannot access 'hello' before initialization
    
// const hello =function(){
//   console.log("hello Sakshi...");
// }

//Incase of Arrow expression
// Cannot access 'hello' before initialization
// const hello =()=> {
//   console.log("hello Sakshi...");
// };


console.log(sam);
//prints undefined
var sam= "Sakshi is clever ";

//not defined 
// let sam = "Sakshi is clever ";
// const sam = "Sakshi is clever ";

console.log(sam);