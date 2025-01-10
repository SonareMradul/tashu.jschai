console.log(null>0);
console.log(null == 0);
console.log(null>=0);
// equality and comparison operator works differently as comparisons convert null to a number
// treating it as 0
// to strictly check === it is used it always compare two same data type entities
console.log(undefined>0);
console.log(undefined == 0);
console.log(undefined>=0);
// in case of undefined every case is false
// avoid using these confusing comparision and if required use ===