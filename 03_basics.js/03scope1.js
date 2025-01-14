let h= 56
var u= 67 // global scope
if(true){
    let a = 5
    const b = 6 // local scope
    var c = 7
    d =0
}
// console.log(a); // a is not availible outside if 
// console.log(b); // b is not availible outside if
console.log(c); // c is availible outside if
console.log(d);
// node and browser(window) ke scopes alg alg hote hain 