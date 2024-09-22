// Add function
function add(a, b) {
    return a + b;
}

// Subtract function
function subtract(a, b) {
    return a - b;
}

// Multiply function
function multiply(a, b) {
    return a * b;
}

// Divide function
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

// Example usage
function runCalculator() {
    console.log("Calculator Example:");

    const num1 = 10;
    const num2 = 5;

    console.log(`Add: ${num1} + ${num2} = ${add(num1, num2)}`);
    console.log(`Subtract: ${num1} - ${num2} = ${subtract(num1, num2)}`);
    console.log(`Multiply: ${num1} * ${num2} = ${multiply(num1, num2)}`);
    console.log(`Divide: ${num1} / ${num2} = ${divide(num1, num2)}`);
}

// Call the calculator function
runCalculator();
