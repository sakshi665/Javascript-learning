//lexical scope
const myvar = "Sakshi";
function myapp(){
        
        function myfuc(){
            //const myvar= "value2";
            const myfun2 = () => {
            console.log("inside myfunc",myvar);
            }
            myfun2();
        }
        console.log(myvar);
        myfuc();
}
myapp();