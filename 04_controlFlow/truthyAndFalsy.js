// falsy : -0,0,false,0n(Bigint),null,undefined,NaN,""
// all other than these are truthy values
// some surprising truthy values are: '0','false',' ',[],{}, 
// function(){} ---> this is empty function (truthy)
// caveat points(warning or notice)

let arr = [1,2,3,4,5,6,7]
if(arr.length == 0){
    console.log('array is empty');
    
}
else{
    console.log('array has something');
    
}
// to check if object is empty
let obj = {}
if(Object.keys(obj).length == 0 ){  // (Object.keys(obj)) this will convert obj into array             
    console.log('object is empty');
    
}             

// some general knowledge
// false == '0' // true
// false == '' // true
// 0 == '' //true

// Nullish coalescing operator(??): null undefined
val1 = null ?? 200
val2 = undefined ?? 30
console.log(val1);

// terniary operator (shorter syntax of if else)
//condition ? true : false
const iceTeaPrice = 1000
iceTeaPrice >=500 ? console.log('more than 500') : console.log('less than 500');





