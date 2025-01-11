const accountId = 123456
let accountEmail = "mradulsonare@gmail.com"
let accountPassword = "*******"
// you can also define variable without using var or let keyword but this practice is avoided
accountCity = "Nagpur"
let accountPincode = 461551
// dont use var always use let because of block scope problem
console.table([accountId,accountEmail,accountPassword,accountCity,accountPincode])
let bankName
console.log(bankName)
//if you dont give a value to a variable it will automatically store undefined