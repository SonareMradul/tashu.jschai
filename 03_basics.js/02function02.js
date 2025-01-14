// *************when you dont know how many parameters to pass***************

function calculateCartPrice(...num1){
    return num1 // ... is rest operator and collects all arguments in form of array to a single element 
}
console.log(100,200,300);
// jitni values variable number se match kar gayi wo kar gayin baaki sab rest operator wale 
// variable me chali jayengi
const objuser={
    username: "hitesh",
    price : 199
}
function handleObject(anyObject){
    console.log(`my username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(objuser)
// you can also pass an object directly by making it into function calling as shown below
handleObject({
    username : "mradul",
    price : 450
})

// you can also pass an array 
const newArray = [55,66,77,88,99]
function handleArray(getArray){
    return getArray[2]
}
console.log(handleArray(newArray));
