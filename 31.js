//arrow functions

// const happyB = function () {
//   console.log("Happy Birthday to you");
// };

const happyB = () => {
  console.log("Happy Birthday to you");
};
happyB();   


const sumofnum = (num1, num2) =>  {
  return num1 + num2;
};

console.log(sumofnum(2,3));



const isEven =(num) => {
    return num%2==0;
}

console.log(isEven(2));

const firstchar = anystring => anystring[0];
console.log(firstchar("Sakshi"));   