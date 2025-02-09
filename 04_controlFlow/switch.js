// switch is pretty much used in redux
month =2
switch (month) {
    case 1: console.log("january");  // presss shift + alt key + down arrow se copy ho jaata h
            break;
    case 2: console.log("february");
            break;
    case 3: console.log("march");
            break;
    case 4: console.log("april");
            break;
    case 5: console.log("may"); // if a break statement is not applied and case matches 
            break;              // all subsequent cases will be executed irrespective of the
    case 6: console.log("june");  // fact that key value doesnt matches it is called fallthrough
            break;
    case 7: console.log("july");
            break;
    case 8: console.log("august");
            break;
    case 9: console.log("sept");
            break;
    case 10: console.log("oct");
            break;
    case 11: console.log("nov");
            break;
    case 12: console.log("dec");
            break;
    default:console.log("no number matched");
            break;
    
}// you can use string and number in switch and all data types but constant expressions only  jabki c me bas inegers allowed h