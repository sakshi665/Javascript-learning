// splice method

//start,delete,insert

const myarray = ['item1','item2','item3'];
//delete
myarray.splice(1,1);
myarray.splice(1,0,'item4');

//insert
myarray.splice(1,0,'Inserted item')
console.log(myarray);

//insert and delete 

myarray.splice(1,1,"Insert")
console.log(myarray)


//insert
