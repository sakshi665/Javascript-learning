// Iterables
// jispe for of loop laga saktehai
// string and array are Iterables

//string
const firstname="Sakshi"
for(let char of firstname){
    console.log(char);
}

//array
const myarray=["items","items2","items3"];
for(let item of myarray){
    console.log(item);
}

//objects
//object is not iterable
// const users={'key':'item1','key1':'item2'};
// for(let items of users){
//     console.log(items);
// }

//array like objects
//jinke pas length property hoti hai
//aur jinko jum index se access kr sakte hai
// example:string
const first ="Saksho";
console.log(firstname.length)
console.log(firstname[2]);
