const user = "Mradul"
let repoCount =  5
console.log(user +" has "+ repoCount + " repositories on github");
// bad and old syntax for concatenation of string
console.log(`Hello my name is ${user} and i have ${repoCount} github repos`);
// cool and new syntax and better and you can use methods on the go and helps in string interpolation
console.log(`Hello my name is ${user.toUpperCase()} and my repocount us ${repoCount} `);
//whenever use a function don't forget to put parentheses after the function name.

// another way to declare a string is
const gameName = new String('Vice-city')
//when declared this way string is treated as an object and you can see various methods in console
gameName[3]= 'd' // because strings are immutable in javascript
// to make changes in string

console.log(gameName[0]);
//all the functions are object of prototype pf javascript
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf('c'));
console.log(gameName.substring(0,8)); // will run from 0 to 7 // negative values nhi de skte
console.log(gameName.slice(-7,-1));
let newstring = "   mradul\n"
console.log(newstring)
let aftertrim = newstring.trim()
console.log(aftertrim); // removes whitespaces and line terminators(line terminators kaise hote hai samajh nhi aaya)
const url = "https://mradulsonare@gmail%20.com"
console.log(url.replace('%','-'));
console.log(url.includes('hitesh'));
console.log('hitesh-hi-name'.split('-',3)); // returns an array of same number of strings as you provided as separator












