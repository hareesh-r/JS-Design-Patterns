const { addBookWithFlyweight, printSummaryWithFlyweight } = require('./flyweight');
const { addBookWithoutFlyweight, printSummaryWithoutFlyweight } = require('./without-flyweight');

function calculateMemoryUsage() {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    return Math.round(used * 100) / 100; // Convert bytes to MB
}

function benchmark() {
    const count = 100000;

    // Benchmark without Flyweight
    console.time('Adding Books Without Flyweight');
    const beforeMemoryWithout = calculateMemoryUsage();
    for (let i = 0; i < count; i++) {
        const isbn = `ISBN-${i % 100}`;
        addBookWithoutFlyweight(`Book Title ${i}`, `Author ${i}`, isbn, i % 2 === 0, Math.floor(Math.random() * 100));
    }
    const afterMemoryWithout = calculateMemoryUsage();
    console.timeEnd('Adding Books Without Flyweight');
    printSummaryWithoutFlyweight();
    console.log(`Memory used without Flyweight: ${afterMemoryWithout - beforeMemoryWithout} MB`);

    // Benchmark with Flyweight
    console.time('Adding Books With Flyweight');
    const beforeMemoryWith = calculateMemoryUsage();
    for (let i = 0; i < count; i++) {
        const isbn = `ISBN-${i % 100}`;
        addBookWithFlyweight(`Book Title ${i}`, `Author ${i}`, isbn, i % 2 === 0, Math.floor(Math.random() * 100));
    }
    const afterMemoryWith = calculateMemoryUsage();
    console.timeEnd('Adding Books With Flyweight');
    printSummaryWithFlyweight();
    console.log(`Memory used with Flyweight: ${afterMemoryWith - beforeMemoryWith} MB`);
}

// Run the benchmark
benchmark();
