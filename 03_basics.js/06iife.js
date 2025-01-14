// Immedietly Invoked function Expression(IIFE)
/*jab hum ek function define karte hain or jab usko call krte hai uske beech me wo global
variable or scope se pollute ho jaata hai, usse bachane ke liye hum function ko define krne ke 
just baad use call krne ke liye iife method ka use krte hain */
(function moku(){
    console.log("hi guys"); // named IIFE
    
})(); // semicolon is must if you want to make another function like this
((name) => {
    console.log(`hi ${name}`); //unnamed IIFE
    
})('mradul') //with parameters

// immediately invoked