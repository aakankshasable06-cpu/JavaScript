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
// console.log(userLogIn());

function calculateCartPrice(...num){
    let sum =0
    for (let i = 0;i < num.length;i++)
    {
        sum +=num[i]   
    }
    return sum
}

// console.log(calculateCartPrice(150,270,4300));


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
let user = {
    username :"sam",
    price : 499
}
// handleObject(user)
// handleObject({username:"ram",price:1000})

function  returnsecondvalue(arr){
    return arr[1]
    
}
console.log(returnsecondvalue([142,566,75,45]));
