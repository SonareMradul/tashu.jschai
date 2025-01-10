// ***************************conversions******************************************

let score = '45' // string can be written in single or double quotes or even backticks
console.log(typeof score);
console.log(typeof(score)); // typeof can be used as a keyword or function
let valueInNumber = Number(score) //when using data types names in code use them in capital letters othervise node will show an error
console.log(typeof(valueInNumber)); 
let my_name = "manu123"
console.log(Number(my_name));

//but when you convert any alphanumeric or pure alphabetical string(ex. '33abc') to number its data type is converted 
// but value is not as the value gets converted into NaN(Not a Number) 
let value1 = undefined
console.log(Number(value1));
//boolean to number is easily done as true=> 1 and false=>0
let boolenvalue = 1;
console.log(Boolean(boolenvalue));
// 1=>true 0=>false ""(empty string)=>false "non empty string"=>true
let someNumber = 42
let stringNumber = String(42)
console.log(stringNumber);
console.log(typeof stringNumber);

//************************************operations**************************************** */
let value = 3;
let negValue = -value
console.log(negValue);
//operations are +,-,*,/,**,%
let str1 = "hi"
let str2 = " Mradul"
console.log(str1 + str2);
// dont use tricky conversions in your code use brackets to prioritize calculations although practice for interviews



