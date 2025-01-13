// singleton object is made using constructor object.create
// another type of object is made using object literals
const mySym = Symbol("key1") // declaring a symbol
const user = {
    nickName : "Mradul",
    "full name": "Mradul Sonare",
    [mySym]: 'nice', // how to declare a symbol in object and value is printed usng square brackets
    age : 22,
    email : "mradulsonare@gmail.com",
    lastLogin : ['monday','tuesday','thursday'],
    phone_Number : 459547293858 
}
// how to access object elements
console.log(user.email); // 1st way
console.log(user["email"]);
console.log(user['full name']); // you can not access the element whose key name has a space using dot operator
console.log(typeof mySym);
// values can be modified using .(dot) operator
user.nickName = "tashu"
// you can lock an Object values using freeze() method
// Object.freeze(user)
user.age = 16
user.nickName = 'motu'
console.log(user); // values did not change

user.greeting = function(){
    console.log(`hello JS user, ${this.nickName}`);
}
user.greeting()




