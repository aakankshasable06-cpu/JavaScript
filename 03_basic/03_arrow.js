const user ={
    username :"aakanksha",
    price:899,
    welcomeMessage :function(){
        console.log(`Welcome ${this.username} `);
        console.log(this);
   
    }

}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);

const chai = () =>{
    let username ="chai"
    console.log(this)
}

chai()
// const addtwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addtwo(5,8));


// const addtwo = (num1,num2) => num1+num2
const addtwo = (num1,num2) => (num1+num2)

console.log(addtwo(5,8));
