// arrays 
// you can store many types of elements in a single array and arrays are resizable
const myArray = [1,2,3,4,'mradul',6.7]
const array2 = new Array(1,2,3,4)
// elements can be accessed using zero-based indexing using square brackets
//what is shallow copy and what is deep copy
//array methods
myArray.push(5)
console.log(myArray);
myArray.pop() // pops out last element
console.log(myArray);
myArray.unshift(3) // insert element at the beginning of array, considered bad by cp'ers as 
// it shifts all the elements when insert one at beginning
console.log(myArray);
myArray.shift() //removes one element from beginning
console.log(myArray);
console.log(myArray.includes(0));
console.log(myArray.indexOf(5)); // returns -1 as no 5 is there
const newArray = myArray.join() // copies all the elements of myArray in newArray but in form of string
console.log(newArray); 
// watch video again for slice and splice difference

