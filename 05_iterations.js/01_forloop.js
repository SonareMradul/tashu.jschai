for (let i = 0; i < 5; i++) {
    console.log(i)
    
}
// nested loop
for(i= 0 ;i<=10;i++){
    console.log(`outer loop ${i}`);
    
    for( j=0;j<=10;j++ ){
        console.log(`inner loop ${j}`);
        
    }
}
// agr array ki length 3 h or aapne 4 baar loop chala di array par to 
//undefined print hoga not ki out of index error  aayega
// agr kabhi incremental value likhna bhoolgye to loop infinite chalegi or ctrl c se rokenge loop running ko