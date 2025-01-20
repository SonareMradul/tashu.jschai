/************most used loop******************/
myArray = ['c','cpp','javascript','java','ruby','go']
myArray.forEach(function val(item) {
    console.log(item);
}); // function is callback with no name and iterable as parameter
//for each is a function availible in array prototype


// *********with arrow function**************
myArray.forEach((item) =>{
    console.log(item);
    
})

// agr aapke paas ek bana banaya function hai to aap use bhi use kr skte ho foreaach mein
let newArray = ['toyota','mercedes','hyundai','celerio']
function printThing(item,index,arr){
    console.log(item,index,arr)
}
newArray.forEach(printThing) // here you give just reference of function means not parentheses
// iterable hi nhi hota foreach ke paas parameter ke roop me or bhi parameters hote hain 
//like index arr

// now how to use in objects
let myCoding = [
    {
        framework : "react.js",
        company : 'facebook'
    },
    {
        framework:'angular.js',
        company : 'Google'
    },
    {
        framework:'vue.js',
        company : 'made by former google employee'
    }

]
// databases se jo value aati hai wo array ke form me hi aati hai or har ek value ek object h
myCoding.forEach((item)=> {
    console.log(item);
    console.log(item.company);
    
})
// for each always returns undefined hence cannot be useful to store in a variable
let arrayVariable = myCoding.forEach((item)=> {
    return item // undefined
})



