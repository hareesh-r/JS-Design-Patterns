import { add, subtract, multiply, divide } from './calculationLogic.js';

function runCalculator() {
    console.log("Calculator Module Example:");

    const num1 = 10;
    const num2 = 5;

    console.log(`Add: ${num1} + ${num2} = ${add(num1, num2)}`);
    console.log(`Subtract: ${num1} - ${num2} = ${subtract(num1, num2)}`);
    console.log(`Multiply: ${num1} * ${num2} = ${multiply(num1, num2)}`);
    console.log(`Divide: ${num1} / ${num2} = ${divide(num1, num2)}`);
}

runCalculator();
