// ***********************destructuring of objects**********************************
const course = {
    Name : "chai aur js",
    fees : '999',
    course_instructor : 'hitesh'
}
course.tutor; // if you want to print tutor multiple times you have to use this statement multiple times
// const {property_name} = object_name
let {course_instructor} = course
console.log(course_instructor);
// if you want to change the property name you can do it as well
let {course_instructor: tutor} = course
console.log(tutor);
// ***************** API(application programming interface) **********************
// api me values json ke form me aati hai
// json format
// {
//     "color" : "Blue" ,
//     "height" : 5,
//     "brand" : "tesla"
// }

