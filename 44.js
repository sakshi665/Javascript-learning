//reduce method

const number=[1,2,3,4,5,6]

const num=number.reduce((accumulator , currentValue)=>{
    return accumulator+currentValue;
},100);

console.log(num);


//accumulator  currvalue  returm
    //  1              2       3
    //  3              3       6
    //  6              4       10
    //  10            5        15
    //  15             6       21



const userCart = [
    {productId:1 , productName: "mobile" ,price:20000},
    {productId:2 , productName: "laptop" ,price:20000},
    {productId:3 , productName: "telephone" ,price:30000},
    {productId:4 , productName: "macbook" ,price:50000}
]

const user =userCart.reduce((totalPrice,currentProduct)=>{
   return  totalPrice +currentProduct.price
},0);

console.log(user);

//totproject 