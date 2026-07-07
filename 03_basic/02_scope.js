let a =77845
    const b=130565
    var c=29656
    d =10078
if (true){
    let a =10
    const b=130
    var c=29
    d =100
    console.log("inner ",a);
    console.log("inner ",b);
    console.log("inner ",c);
    console.log("inner ",d);
    
}
 console.log("outer ",a);
 console.log("outer ",b);
 console.log("outer ",c);//  var change globally
 console.log("outer ",d);//  change globally 




function one (){
    const username ="akanksha"

    function two (){
        const wedsite ="youtube"
        console.log(username);
        
    }
    // console.log(wedsite);
    two ()
}
one()

if (true){
    const username="aakanksha"
    if(username==="aakanksha"){
        const wedsite=" youtube"
        console.log(username+wedsite);
        
    }
    // console.log(wedsite);
    
}
// console.log(username)

console.log(addone(5))

function addone(num){
    return num +1
}

const addtwo = function(num){
    return num+2
}
addtwo(5)
