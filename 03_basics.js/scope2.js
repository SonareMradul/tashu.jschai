function one (){
    const userName = "hitesh"
    function two(){
        console.log(userName);
        let website = "google"
        
    }
    two() // jahan error h uske phle ki lines run ho jayengi
    // console.log(website);
    

}
one()

if(true){
    const userName = "hitesh"
    if(userName == "hitesh"){
        const website = "youtube"
        console.log(`${userName} ${website}`);
        
    }
    console.log(userName);
    
}
// console.log(website);
//////////////////++++++++++++++interesting+++++++++++++++
addOne(5)
function addOne(num){              //function as function
    console.log(num+1);
    
}
addTwo(4)
//variables are very powerful in js they can hold any value
const variable = function addTwo(num){
    console.log(num+2);        // function as expression   
    
}
//**when a function is defined as expression they cannot be called before they are declared
// but when defined as a function they can be called before declarartion */