//block scope vs function scope

// {
//     let firstName ="Sakshi";
//     console.log(firstName);
// }
//  //console.log(firstName);
//  {
//     let firstName = "Sam";
//     console.log(firstName);
//  }

//  const firstName = "garima"
//  console.log(firstName);

//var is function scope

    // {
    //     var firstname = "Sakshi"
    //     console.log(firstname);
    // }

    // console.log(firstname);

//----------------------------------------

// function myApp(){
//      if(true){
//         let firstname = "Sakshi";
//         console.log(firstname);
//      }
//      console.log(firstname);
// }

// myApp();      

//---------------------------------

function myApp(){
     if(true){
        var firstname = "Sakshi";
        console.log(firstname);
     }
     console.log(firstname);
}

myApp();  
 


