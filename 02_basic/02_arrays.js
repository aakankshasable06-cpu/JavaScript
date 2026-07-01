const crime_wedseries= ["familyman","specialops","criminaljustices"]
const interesting_wed =["panchayat","gram_chikitshalay"]

crime_wedseries.push(interesting_wed)
console.log(crime_wedseries);

const total=crime_wedseries.concat(interesting_wed)
console.log(total);

const total =[...crime_wedseries,...interesting_wed]

console.log(total);

const arr1=[1,2,[,9,3,5],4,[4,3,[89,63,45],5],6]
console.log(arr1.flat(Infinity));


console.log(Array.from({
    name:"aakanksha"
}));
console.log(Array.isArray("aakanksha"));
console.log(Array.from('sable'));

let s1=100
let s2 =290
console.log(Array.of(s1,s2));

