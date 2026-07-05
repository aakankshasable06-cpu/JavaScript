function  printname(){
    console.log("Aakanksha sable");
    
}
// printname()

function addTwoNumber(num1,num2){
    // console.log(num1+num2);
    return num1 +num2
}
const result =addTwoNumber(4,5)
// console.log("result",result);


function userLogIn(username ){
    if (username === undefined){
        console.log("Please enter username");
        return
        
    }
    return`${username} just login`
}
console.log(userLogIn());
