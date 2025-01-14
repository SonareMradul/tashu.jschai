function sayMyName () {
    console.log('M');
    console.log('R');
    console.log('A');
    console.log('D');
    console.log('U');
    console.log('L');
}
//sayMyName  this is reference 
sayMyName() // this is execution

function addTwoNumbers(number1, number2){ // what is written is parameters
    return number1 + number2;
    // return ke baad likha koi statement print nahi hota

    
}
const result = addTwoNumbers(3,5) // what is given is arguments
console.log(result);
function loggedInMessage(username){
    if(username == undefined){
            console.log('please provide a username');
            return 
        }
    return `${username} just logged in`
    }
let message =loggedInMessage("mradul")
console.log('message');

