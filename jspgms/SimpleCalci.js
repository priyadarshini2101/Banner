const prompt = require('prompt-sync') ({sigint:true})

const operator = prompt('Enter the operator(such as +,-,* /):');
const number1 = parseFloat(prompt('Enter the first number:'))
const number2 = parseFloat(prompt('Enter the second number:'))
var result

switch(operator){
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
        result = number1-number2;
        console.log(result)   
        break;
       
    case '*':
            result = number1*number2;
            console.log(result)   
            break;

     case '/':
                result = number1/number2;
                console.log(result)   
                break;        
    
}
