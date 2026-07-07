const user ={
    username :"aakanksha",
    price:899,
    welcomeMessage :function(){
        console.log(`Welcome ${this.username} `);
        console.log(this);
   
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

console.log(this);

