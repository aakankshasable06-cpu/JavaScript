let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toUTCString())
//date ()== obejct 

// const secondDate = new Date(2023,0,26)
// const secondDate = new Date(2023,0,26,4,6)
// const secondDate = new Date("2026-02-13")
const secondDate = new Date("02-10-2022")
// console.log(secondDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(secondDate.getTime())
console.log(Math.floor(Date.now()/1000))

console.log (mydate.getDay())

console.log (mydate.getMonth()+1)

console.log(mydate.toLocaleString( "default",{
    weekday: "long"
}))
