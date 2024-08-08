//callback function 

// function myfunc(a){
//     console.log(a);
//     console.log("hello world");

// }

// myfunc([1,2,3,]);

// function myfunc2() {
//   console.log("Inside the function");
// }

// function myfunc(a) {
//   a();
//   //console.log("hello world");
// }

// myfunc(myfunc2);

function myfunc2(name) {
  console.log("Inside the function");
  console.log(`my name is ${name}`);
}

function myfunc(a) {
  console.log("hello,I am inside func and I can");
  a("Sakshi");
}

myfunc(myfunc2);