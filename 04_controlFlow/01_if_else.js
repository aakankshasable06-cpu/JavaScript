const score =600
if(score>1000){
    const power=500
    console.log(`power is ${power} you can run .`);
    
}
else if (score>500){
    console.log(`you can run`);
    
}
else{
    console.log(`go don't run `);
    
}


const logginEmail = true
const logginGoogle =false
const cash = true

if (logginEmail || logginGoogle){
    console.log("userlogin");
    
}
if (( logginEmail || logginGoogle)&& cash ){
    console.log(" allow to buy cousre");
    
}