//Dates
console.log(typeof Date); // it is a function object 

let myDate = new Date() // it is declared as an object
console.log(myDate); 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString()); //same as myDate
console.log(myDate.toJSON()); //same as myDate
console.log(myDate.toLocaleDateString()); // mm/dd/yyyy format
console.log(myDate.toLocaleString()); // mm/dd/yyyy, time format 
let myCreatedDate = new Date(2025,0,11) // months zero se shuru hote h javascript me
console.log(myCreatedDate.toDateString());
let my1CreatedDate = new Date(2025,0,11,5,3) 
console.log(my1CreatedDate.toLocaleDateString());
let thirdDate = new Date("04-11-2025")
console.log(thirdDate.toLocaleDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp); // these values you get in miliseconds
console.log(my1CreatedDate.getTime());
// you can use get getMonth and getDay on date variable (month starts from zero) or you can console log +1
// toLocaleDateString() is quite intresting
newDate.toLocaleDateString('default',{
    day: "long" // and many more properties
})
// study date and time topics again to get more understanding




