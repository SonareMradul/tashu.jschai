// control flow means you can ctrl flow of programs excecution by conditions
const balance= 1000 
if (balance>100) console.log(balance); //short hand notation (implicit scope{})
// write only one statement in this way inside if
if (balance>700) console.log(balance), console.log("more than 700");
// bad practice // unreadable code immature practice
 
// javascript has else if not elif
let loggedIn = true
let debitCard = true
let loginFromGoogle = true
let loginFromNumber = false
if (loggedIn && debitCard && 2==2){
    console.log('allow purchase');
}
else if(loginFromGoogle||loginFromNumber){
    console.log('then also allow purchase');
    
}