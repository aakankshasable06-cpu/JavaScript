let arr =[1,2,4,5,3]

console.log(arr[0]);

const arrnew= new Array(4,7,5,93,74,4)

const heros =["Ironman","Hulk","Spiderman"]

//method


arr.push(6)
arr.push(8)
console.log(arr);
arr.pop()
console.log(arr);

arr.unshift(0)
console.log(arr);
arr.shift()
console.log(arr);

console.log(arr.includes(2));
console.log(arr.indexOf(5));

console.log(arr)
console.log(arr.join());



// slice ,splice

console.log('A' ,arr);

const arr2 = arr.slice(1,3)
console.log(arr2);
console.log('B' ,arr);

// slice give a slice form the array (excludes end )did not  muniplate orginal array

const arr3 = arr.splice(1,3)
console.log(arr3);
console.log('C' ,arr);

// whereas  splice give a slice form the array (includes the end)  did not  muniplate orginal array



