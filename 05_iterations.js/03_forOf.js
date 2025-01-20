const arr = [1,2,3,4,5]
for (const element of arr) {
    console.log(element);
    }
    // print all elements of array
const greetings = "hello world"
for(const greet of greetings)
{
    console.log(`each char of greetings is ${greet}`)
}

// Maps is also a data type present in javascript
const myMap = new Map()
myMap.set("In","india")
myMap.set('usa','united states of america')
myMap.set('uk','United Kingdom')
myMap.set("In","india") // no duplicate values allowed
console.log(myMap);
for (const key of myMap) {
    console.log(key); // array ke form me print ho jayega individual key value pair
}
for (const [key,value] of myMap) {
    console.log(key, ':->', value);
}
// better way to print map

// use forof for objects
let heros_object = new Object()
heros_object ={
    game1 : "vice-city",
    game2 : "e1 dardo quest"
}
for (const [key,value] of heros_object) {
    console.log(key ,':->', value);
    // objects are not iterable through forof
}

//********************************************************************* */
let proObj = {
    js : "javascript",
    py : "python",
    cpp : 'c++'
}
for (const key in proObj) {
   console.log(key);
   
}