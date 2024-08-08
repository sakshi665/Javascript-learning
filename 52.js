// sets are iterable
// store Data
// sets also have its own method 
// No index based access 
// order is not guaranteed
// unique items only (no duplicates allowed)

const number= new Set([1,2,3]);
console.log(number);
console.log(number[2]);


const number1 = new Set("abc");
console.log(number1);

// const items = ['item1','item2','item3'];
const numbers=new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(['items1','items2'])
if(numbers.has(1)){
    console.log("1 is present");
}
else{
    console.log("1 is not present");
}
// numbers.add(items);
console.log(numbers);

for(let number of numbers){
    console.log(number);
}



const num=[1,2,3,4,4,5,5,6];
const uniqueval=new Set(num);
console.log(uniqueval);
console.log(num);