//Filter function

// const number = [1,2,3,4,5,6];

// const isEven = function(number){
//     return number%2==0;
// }

// const ans=number.filter(isEven);

// console.log(ans);


//filter function using arraw function

const number = [1, 2, 3, 4, 5, 6];

const ans = number.filter((number)=> {
  return number % 2 == 0;
});

console.log(ans);
