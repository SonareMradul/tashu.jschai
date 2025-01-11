console.log(null>0); //false
console.log(null == 0); //false
console.log(null>=0); //true
// equality and comparison operator works differently as comparisons convert null to a number
// treating it as 0
// to strictly check === it is used it always compare two same data type entities
// we dont have >== and <== as we will be unable to know that the result is wrong due to values or due to data types like below if x is compared to 20 we dont know the value of x
// so ew would be unable to know that either x is greater than 20 or has different data type  
//if the ans is wrong
//x<==20
console.log(undefined>0);
console.log(undefined == 0);
console.log(undefined>=0);
// in case of undefined every case is false
// avoid using these confusing comparision and if required use ===