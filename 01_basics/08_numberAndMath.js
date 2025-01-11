const score = 100
const run = new Number(160) // here number is an object
console.log(run.toExponential());
console.log(typeof run);
// to convert it into Number
let runInNum = run.valueOf()
console.log(runInNum);
// to get more of it number ko toString() ki mada se string bana kar uspe string functions apply kar sakte hain
let strNum = runInNum.toString();
console.log(typeof strNum);
console.log(strNum.length);
console.log(run.toFixed(2));// gives precision value of a number according to parameter
const otherNumber = 456.93
console.log(otherNumber.toPrecision(2)); // returns as string
const money = 10000000
console.log(money.toLocaleString('en-In'))// converts to readable form // deault is us you can give parameter for country
//console me Number. krke bahut saari properties dekh skte ho
//******************************maths**************************** */
//math is object in javascript
// console.log(Math);// has lot of functions availible
console.log(Math.abs(-4)); //converts to absolue(positive value)
console.log(Math.round(4.67));
console.log(Math.round(4.2));
console.log(Math.ceil(4.1));//upper value
console.log(Math.floor(4.9));//lower value
console.log(Math.min(4,3,2,1)); // min value of an array
console.log(Math.max(3,6,9,1)); // max value of an array
console.log(Math.random()*10+1);
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*(max-min))+min); //+min isiliye because min value is 10 and usse to jyada hi chahiye number














