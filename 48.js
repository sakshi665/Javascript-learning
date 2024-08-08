const numbers=[3,5,8,9];
const ans=numbers.some((number)=>number%2===0);
console.log(ans);


const userCart = [
  { productId: 1, productName: "mobile", price: "12000" },
  { productId: 2, productName: "laptop", price: "13000" },
  { productId: 3, productName: "macbook", price: "125000" },
];
const ans1 = userCart.some((cartItem) => cartItem.price > 100000);
console.log(ans1);