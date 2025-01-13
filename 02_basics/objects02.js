// const tinderUser = new Object()
let tinderUser = {}
console.log(tinderUser);
tinderUser.Name = 'Mradul'
tinderUser.Job = 'Frontend Engineer'
tinderUser.IsLoggedIn = false
console.log(tinderUser);
//nested objects
const user = {
    Name : 'Mradul Sonare',
    skills : {
       techStack :{ language: 'javascript',
        database : 'MongoDB',
        designTool : 'Framer'
    }
}
}
console.log(user.skills);
const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'c', 4 : 'd'}
let obj3 = {obj1,obj2}
console.log(obj3); // obj3 will contain obj1 and obj2 as separate objects, the contents of two objects will not get merged
obj3 = Object.assign({}, obj1, obj2)
// the 1st parameter stores all the objects so better to give {} otherwise all values be in obj1
const sam = {rating : '1/5', placement : '0' }
const iit = {star : '5/5', job : '100'}
const colleges = {...sam,...iit}
console.log(colleges);
// databas me value aayengi array of objects ke form me
const objarray = [
    object1 = {
        id : 1 ,
        email : "ms@google.com"
    },
    object2 = {
        id : 1 ,
        email : "ms@google.com"
    },
    object3 = {
        id : 1 ,
        email : "ms@google.com"
    },
    object4 = {
        id : 1 ,
        email : "ms@google.com"
    }
]
// so to access these
console.log(objarray[2].id)
// we can get values of object in form of array also
console.log(Object.keys(objarray)); // returns all keys of objects in form of array
console.log(Object.values(objarray)); //returns all values of objects in form of array
console.log(Object.entries(sam)); // returns set of key and values in form of array
// to check if an object has the following key or not
console.log(sam.hasOwnProperty('rating')); //true

