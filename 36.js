//default parameters

// function addtwo(a,b){
//     return a+b;
// }
// const ans=addtwo(4)
// console.log(ans);


// function addtwonum(a,b){
//     if(typeof(b)==="undefined")
//         {
//             b=0;
//         }
//     return a+b;
// }

// const ans=addtwonum(4);
// console.log(ans);



function addtwonum(a, b=0) {
 
  return a + b;
}

const ans = addtwonum(4);
console.log(ans);


