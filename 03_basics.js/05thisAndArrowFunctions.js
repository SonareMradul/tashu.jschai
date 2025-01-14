const user = {
    userName : "hitesh",
    price : 999,
    welcomeMessage : function (){
        console.log(`welcome ${this.userName}`);
        
    }
}
user.welcomeMessage()
console.log(this); // output => {} because we are in node and here global object is nothing here in this file 
// global object of browser is window

function chai(){
    let userName = "hitesh"
    console.log(this); // many things are there in output of this
    console.log(this.userName); // you cannot use this in function it is showing undefined
    
    
}
chai()

let chaiLover = () =>{ //in arrow functions remove function name and add arrow after parentheses
    console.log('hi guys');
    console.log(this); //output=> {}
    
    
}
chaiLover();




// arrow function syntax 
const addTwo= (num1,num2) => {
    return num1+num2
}
// you can also write it in implicit(compiler self-understandble) form without
const addOne = (no1, no2) => no1 + no2 
// no1 + no2 can be written in parentheses or without parentheses // used very much in react
// parenthese used to return object 
const addOnes = (no1, no2) => ({username : "hitesh"})
// without () it will show undefined
console.log(addOnes(3,2));
