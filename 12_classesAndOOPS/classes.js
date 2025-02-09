const user = {
    username : "hitesh",
    loginCount : 3,
    signedIn : true,
    getUserDetails : function(){
        console.log(`${this.username}`); // output - hitesh
        console.log(this);
        console.log(this); // output- user
        
        
    }
}
console.log(user.getUserDetails());
console.log(this); // output- {}
console.log(this); // output- yahi line browser ke console me likhoge to window milega output me



// ab pdhte h constructor('new' word) ki importance

function mainUser(username,loginCount,signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this.greet = function(){
        console.log(`${this.username} is here`);
        
    }
    // return this // it is implicit behaviour return nhi likhoge to bhi return krega
} // but code should be verbose yaa not like java😏
const user1 = mainUser('tashu',5, false)
const user2 = mainUser('Mradul',10, true)
console.log(user1); // isme user 2 ki values aayengi because user2 ne user1 ko overwrite kr liya isiliye hum constructor using new keyword use krenge because constructor hmesha ek new instance(copy) provide krta h object ki

/* better approach is below */

const user3 = new mainUser('manu',7, false)
const user4 = new mainUser('raju',8, true)
console.log(user3);
console.log(user4.constructor); 
//output - [function : mainUser]   mtlb ki constructor ek function h or uska naam bhi whi hota h jis function ka wo constructor hota h




// oops ke baare me or pdhna h








