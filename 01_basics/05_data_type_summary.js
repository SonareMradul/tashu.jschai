// on the basis of how values are stored and acceseed data types are divided into two types 
// primitive and non-primitive(reference)

//primitve : call by value -> 7 in number
// 7 -> String, Number, Boolean, null, undefiend, Symbol, BigInt

//Reference or non primitive :
// Array, Objects, Functions
// if you want to master javascript , master object and browser/web events.

//in typerscript you write const score:number = 56(type safety)
// js is a dynamically typed language

//uses
const score = 67
const runRate = 3.45 //no different data type for real numbers like float

const isLoggedIn = true

const temp = null

let useremail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// variable name should make sense not random a, b, c
const bigNumber = 27894389526789657839468765482396n //(n lga do last me to bigiNT bn jayega )

// array
const MeghaNames = ["challuu", "malluu", "palluu"]
//object
const Megha = {
    name : "tikotu",
    age : 5,
    nickname : "patotu",
    species : "dog"
}
const myFunction = function(){
    console.log("hello world");
    
}
console.log(MeghaNames);
console.log(Megha);
myFunction();

// all non primitive data type are of object type


