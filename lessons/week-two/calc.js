const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);
let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num2 !== 0 ? (num1 / num2) : 'error';
        break;
    default:
        result = 'Please enter a operator (+/-)';
}

console.log(`${result}`);
