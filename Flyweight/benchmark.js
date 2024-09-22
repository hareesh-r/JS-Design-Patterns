const { addBookWithFlyweight, printSummaryWithFlyweight } = require('./flyweight');
const { addBookWithoutFlyweight, printSummaryWithoutFlyweight } = require('./without-flyweight');

function calculateMemoryUsage() {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    return Math.round(used * 100) / 100; // Convert bytes to MB
}

function benchmark() {
    const count = 1000000;
    const results = [];

    // Benchmark without Flyweight
    console.time('Adding Books Without Flyweight');
    const beforeMemoryWithout = calculateMemoryUsage();
    const startTimeWithout = Date.now();
    for (let i = 0; i < count; i++) {
        const isbn = `ISBN-${i % 100}`;
        addBookWithoutFlyweight(`Book Title ${i}`, `Author ${i}`, isbn, i % 2 === 0, Math.floor(Math.random() * 100));
    }
    const endTimeWithout = Date.now();
    const afterMemoryWithout = calculateMemoryUsage();
    console.timeEnd('Adding Books Without Flyweight');
    printSummaryWithoutFlyweight();
    const memoryUsedWithout = afterMemoryWithout - beforeMemoryWithout;
    const timeWithout = endTimeWithout - startTimeWithout;

    // Benchmark with Flyweight
    console.time('Adding Books With Flyweight');
    const beforeMemoryWith = calculateMemoryUsage();
    const startTimeWith = Date.now();
    for (let i = 0; i < count; i++) {
        const isbn = `ISBN-${i % 100}`;
        addBookWithFlyweight(`Book Title ${i}`, `Author ${i}`, isbn, i % 2 === 0, Math.floor(Math.random() * 100));
    }
    const endTimeWith = Date.now();
    const afterMemoryWith = calculateMemoryUsage();
    console.timeEnd('Adding Books With Flyweight');
    printSummaryWithFlyweight();
    const memoryUsedWith = afterMemoryWith - beforeMemoryWith;
    const timeWith = endTimeWith - startTimeWith;

    // Calculate performance boost
    const timeBoost = (timeWithout / timeWith).toFixed(2);
    const memoryBoost = (memoryUsedWithout / memoryUsedWith).toFixed(2);

    // Prepare results for table
    results.push({
        'Method': 'Without Flyweight',
        'Time (ms)': timeWithout,
        'Memory Used (MB)': memoryUsedWithout,
        'Performance Boost (Time)': '1X',
        'Performance Boost (Memory)': '1X',
    });

    results.push({
        'Method': 'With Flyweight',
        'Time (ms)': timeWith,
        'Memory Used (MB)': memoryUsedWith,
        'Performance Boost (Time)': `${timeBoost}X`,
        'Performance Boost (Memory)': `${memoryBoost}X`,
    });

    // Display results as a table
    console.table(results);
}

// Run the benchmark
benchmark();
