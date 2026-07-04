//singleton  when odject is created by constactor
// Object.create
// lateral
const mysym = Symbol("key1")

const  myobject ={
    "fullname": "Akanksha sable",
    name :"Akanksha", 
    [mysym] :"my_key",
    age:20,
    location:"Bhopal",
    islogging : false,
}

// console.log(myobject.name);
// console.log(myobject["name"]);
// console.log(myobject[mysym]);
// console.log(typeof mysym);
// console.log(myobject);


// myobject.age=19
// Object.freeze(myobject)
// myobject.location="delhi"
// console.log(myobject);

myobject.greet = function(){
    console.log("hello js user");
    }
myobject.greet2 = function(){
    console.log(`hello js ${this.name}`);
    }
console.log(myobject.greet());
console.log(myobject.greet2());
