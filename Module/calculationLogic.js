// Add function
export function add(a, b) {
    return a + b;
}

// Subtract function
export function subtract(a, b) {
    return a - b;
}

// Multiply function
export function multiply(a, b) {
    return a * b;
}

// Divide function
export function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

