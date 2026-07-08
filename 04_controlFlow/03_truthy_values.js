//falsy value 
// flase ,0,-0,NaN ,null,undefined,""

// Truthy 

// " "," 0",[],{},1,true,function(){}

const arr =[]
if (arr.length ===0){
    console.log("array is empty");
    
}

const obj ={}
if(Object.keys(obj).length === 0 ){
    console.log("object is emtpy ");
    
}

// NUllish Coalescing Operator (??) :null undefined 
let val ;
// val =10??25
// val = undefined ?? 46
// val = null ?? 478
val = []?? null


console.log(val);

// Terniary Operator 
 
//condition ? true : false 
const price = 10000
price >=1000 ? console.log("exepensive") : console.log("cheaper");

