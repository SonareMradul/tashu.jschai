const user = "Mradul"
let repoCount =  5
console.log(user +" has "+ repoCount + " repositories on github");
// bad and old syntax for concatenation of string
console.log(`Hello my name is ${user} and i have ${repoCount} github repos`);
// cool and new syntax and better and you can use methods on the go and helps in string interpolation
console.log(`Hello my name is ${user.toUpperCase()} and my repocount us ${repoCount} `);
//whenever use a function don't forget to put parenthese after the function name.

// another way to declare a string is
const gameName = new String('Vice city')
//when declared this way string is treated as an object
gameName[3]= 'd'
console.log(gameName);


