// Sort function

//0-48

//a-97 z-122

//A-65 z-90

//sort

//1200 5 4 7 8
//4 5 7 8 1200

const num=[122,3000,400,1,6];
num.sort();
console.log(num);


const username = ['sakshi','madhuri','aabc','abcd'];
username.sort();
console.log(username);

// callback function in sort function
// ascending order a-b
// desccending order b-a
// We can pass optional functional arguments as parameter
// sort in accending order
// a-b -->is greater than zero  --->b,a
// 1200-410
// a-b=790--pos
// put b-a

// negative-->a-b ---a,b
// 5-9=-ve
//
const numbers = [5,9,1200,410,3000]
numbers.sort((a,b)=>{
    return a-b;
});
console.log(numbers);


//price high to low 
//low to high

const products = [
  { productId: 1, productName: "p1", price: 300 },
  { productId: 2, productName: "p2", price: 3000 },
  { productId: 3, productName: "p3", price: 200 },
  { productId: 4, productName: "p4", price: 8000 },
  { productId: 4, productName: "p4", price: 500 }
];

// lowtohigh
const lowtohigh= products.slice(0).sort((a,b)=>{
    return a.price-b.price
});

console.log(lowtohigh);

const hightolow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});

console.log(hightolow); 