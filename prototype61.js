function hello(){
    console.log("hello world");
}
//javascript has function function
//javascript function-->function+object

//function name
// console.log(hello.name);

//you can add your own properties

// hello.myownprop="very unique value";
// console.log(hello.myownprop);


//name property ---> tells function name;

//function provides call bind  and apply methods

//function will provide free space ....free space nothing but object .....which is nothing but prototype

//only functions provide prototype property

// const hello ={key1:"value"}

// if(hello.prototype)
//     {
//         console.log('prototype is present');
//     }
// else{
//     console.log('prototype is not present');
// }


hello.prototype.abc ="abc";
hello.prototype.sing = function(){
    return "lalala"
}
console.log(hello.prototype.sing());

