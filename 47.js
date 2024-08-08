//every method

const numbers=[2,4,6,8];
// const ans=numbers.every((number)=>number%2===0)
//callback function -->true/false (boolean)
//every method --> true/false (boolean)

function isEven(number)
{
    return number%2==0;
}
const ans =numbers.every(isEven);

console.log(ans);



//2

const userCart = [
  { productId: 1, productName: "mobile", price: "12000" },
  { productId: 2, productName: "laptop", price: "13000" },
  { productId: 3, productName: "TV", price: "14000" },
];
const ans1=userCart.every((cartItem)=>cartItem.price<30000);
console.log(ans1);