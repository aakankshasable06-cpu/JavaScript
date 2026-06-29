// Primitive 
// 7 type :String ,Number,Boolean,null,symbol,bigint



const id =Symbol("12345")
const secondid =Symbol("12345")
console.log(id === secondid)

const BigNumber=565131851986453215n
console.log(typeof BigNumber)


//Reference (non primitive)
// Array ,Objet ,Functions
const heros =[5633,46,523]
let info ={
    name : "aakanksha",
    age:"19"
}
console.table( [heros ,info])

 let myfuction =function (){
    console.log("hello javascript")
}

console.log(typeof myfuction)
console.log(typeof id)
console.log(typeof info)
console.log(typeof heros)

//**********************************
// Stack (Primitive) ,Heap(Non Primitive)

let oneVariable =" my value is one "
let twoVariable = oneVariable 
console.log(twoVariable);

twoVariable = "value is two"
console.log(oneVariable);
console.log(twoVariable);

let user1 ={
    id : "user1@gmail.com",
    pass: "!@#$%"
}
let user2 = user1
console.log(user2)
user2.id ="useer234@gmail.com"
console.log(user2)
console.log(user1)