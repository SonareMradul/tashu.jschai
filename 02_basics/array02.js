//arrays
const freedom_fighters = ['vivekanand', 'ambedkar','chanakya']
const scientists = ['tesla','franklin']
const cartoons = [ 'doraemon','minions']
// scientists.push(freedom_fighters)
console.log(scientists);
// push element pushes the array itself into another array not the elements
const all_legends =scientists.concat(freedom_fighters,cartoons,freedom_fighters) //result must be stored in another variable
console.log(all_legends);// concat can take more than two parameters
 
philosohers = [...scientists,...cartoons,...freedom_fighters]
console.log(philosohers); // spread operator(...) is better


const another_array = [1,2,3,45,56,[4,5,6],6,[6,12,45,[6,9,0]]]
const real_another_array = another_array.flat(Infinity)
// flat takes parameter of depth that to how much depth you want to flat the array
console.log(real_another_array);
console.log(Array.isArray([1,2,34])); //checks parameter is array or not
console.log(Array.from('Mradul'));// makes array from parameter
console.log(Array.from({company:"appwrite"})); // return [] beacuse it is unable to make array from object
// it is interesting case for interviews
// you can do this by
const obj1 = {1:'guys', 2:'bails', 3:'cows'}
const tonewarray = Object.keys(obj1) // array of keys
console.log(tonewarray);
const tomorenewarray = Object.values(obj1) // array of values
console.log(tomorenewarray);
console.log(Object.entries(obj1)); // for key and values both as an array element
console.log(Object.entries(obj1).map(([key,value])=>`${key}:::${value}`)); // if you want a custom way
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // makes array of parameters given











