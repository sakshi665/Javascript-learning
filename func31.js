// function expression

const happyB= function(){
 console.log("Happy Birthday to you");
}

// function happyB(){
//     console.log("Happy Birthday to you ...");
// }

happyB();

function sumTwoNum(num1,num2){
  return num1+num2;
}

const returnedvalue = sumTwoNum(4);
console.log(returnedvalue);
//dry --don't repeat yourself
//4+undefined=NAN

//function declaration

function isEven(num){
    return num%2===0;
}
console.log(isEven(2));

function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar("zbc"));

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
}

const myArray = [1, 3, 8, 90];
console.log(findTarget(myArray, 3))

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(2));