
function personInfo(){
    console.log(`person name is ${this.firstname} and age is ${this.age}`);
}

const person1= {
firstname: "Sakshi",
age:8,  
about: personInfo
};


person1.about();