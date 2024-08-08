//function inside function

function app(){
    const myfunc = () => {
        console.log("hello Sakshi");
    }

    const addtwonum = (num1,num2) => {
        return num1+num2;
    }

    const mul= (num1,num2) =>  num1*num2;
   

    myfunc();
    console.log(addtwonum(3,4));
    console.log(mul(4,5));
}

app();