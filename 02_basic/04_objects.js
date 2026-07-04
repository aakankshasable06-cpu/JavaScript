const regular = new Object()
const instauser ={
    id : "123ad",
    name :"siya",
    isLoggedIn :false
}

const regularuser  ={
    email :"aakanksha89@gmail.com",
    "fullname" :{
        "username" : {
            "firstname" : "aakanksha",
            'lastname': "sable"
        }
    }
}
console.log( typeof regularuser["fullname"]);


const obj1 ={ 1:"a",2:"b",3:"c" }
const obj2 ={3:"b",4:"c",5:"d"}

const obj4 =Object.assign({},obj1,obj2)
console.log(obj4);

const obj5 = {...obj1,...obj2}
console.log(obj5);


console.log(instauser);
console.log(Object.keys(instauser));
console.log(Object.values(instauser));

console.log(instauser.hasOwnProperty("id"));