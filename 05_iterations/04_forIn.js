let proObj = {
    js : "javascript",
    py : "python",
    cpp : 'c++'
}
for (const key in proObj) {
   console.log(`the shortcut for ${proObj[key]} is ${key}`);
   
}
// can we use forin for arrays, let's see
const programming = ['html', 'css','javascript','react','react native']
for (const key in programming) {
    console.log(programming[key]);
    console.log(key); // prints indexes of array which are also hidden keys of array

    }

    const myMap = new Map()
    myMap.set("In","india")
    myMap.set('usa','united states of america')
    myMap.set('uk','United Kingdom')
    myMap.set("In","india")

for(const key in myMap){
    console.log(key);} // no maps cannot be iterated with forin because they 
    // are not enumerable(idk what it is)
