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







