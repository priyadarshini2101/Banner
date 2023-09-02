const prompt=require("prompt-sync")({sigint:true});
const n = parseInt(prompt('Enter a positive integer: '));

// var n = 10


    if(n === 0){
        console.log(`factorial of ${n} is 1`)
    }
    else if(n < 0){
        console.log('Error..........cant find factorial')
    }
    else{
        var k = 1
        for(let i=n;i>0;i--){
            k = k*i
        }

        console.log(`factorial of ${n} is ${k}`)
    }
        
    
    
