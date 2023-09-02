
const prompt = require('prompt-sync') ({sigint:true})
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if(number === 1){
    console.log('1 is prime nor composite')
}

else{
    if(number > 1){
        for(let i=2;i<number;i++){
            if(number%i == 0){
                isPrime = false;
                break;
            }
        }
    }

}

if(isPrime){
    console.log('prime')
}
else{
    console.log('Not prime')
}

// check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//            console.log('not a prime')
//         }
//         else{
//             console.log('Prime')
//         }
//     }

    // if (isPrime) {
    //     console.log(`${number} is a prime number`);
    // } else {
    //     console.log(`${number} is a not prime number`);
    // }
