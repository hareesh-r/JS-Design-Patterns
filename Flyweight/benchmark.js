const { addBookWithFlyweight, printSummaryWithFlyweight } = require('./flyweight');
const { addBookWithoutFlyweight, printSummaryWithoutFlyweight } = require('./without-flyweight');

function calculateMemoryUsage() {
    const used = process.memoryUsage().heapUsed / 1024 / 1024; // Convert bytes to MB
    return Math.round(used * 100) / 100; // Round off to 2 decimal points
}

function runBenchmark(addBook, label) {
    console.time(`Adding Books ${label}`);
    const beforeMemory = calculateMemoryUsage();
    const startTime = Date.now();

    for (let i = 0; i < 1000000; i++) {
        const isbn = `ISBN-${i % 100}`;
        addBook(`Book Title ${i}`, `Author ${i}`, isbn, i % 2 === 0, Math.floor(Math.random() * 100));
    }

    const endTime = Date.now();
    const afterMemory = calculateMemoryUsage();
    console.timeEnd(`Adding Books ${label}`);
    
    return {
        memoryUsed: afterMemory - beforeMemory,
        timeUsed: endTime - startTime,
    };
}

function benchmark() {
    const results = [];

    // Benchmark without Flyweight
    const { memoryUsed: memoryWithout, timeUsed: timeWithout } = runBenchmark(addBookWithoutFlyweight, 'Without Flyweight');
    printSummaryWithoutFlyweight();

    // Benchmark with Flyweight
    const { memoryUsed: memoryWith, timeUsed: timeWith } = runBenchmark(addBookWithFlyweight, 'With Flyweight');
    printSummaryWithFlyweight();

    // Calculate performance boost
    const timeBoost = (timeWithout / timeWith).toFixed(2);
    const memoryBoost = (memoryWithout / memoryWith).toFixed(2);

    // Prepare results for table
    results.push({
        'Method': 'Without Flyweight',
        'Time (ms)': timeWithout,
        'Memory Used (MB)': memoryWithout,
        'Performance Boost (Time)': '1X',
        'Performance Boost (Memory)': '1X',
    });

    results.push({
        'Method': 'With Flyweight',
        'Time (ms)': timeWith,
        'Memory Used (MB)': memoryWith,
        'Performance Boost (Time)': `${timeBoost}X`,
        'Performance Boost (Memory)': `${memoryBoost}X`,
    });

    // Display results as a table
    console.table(results);
}

// Run the benchmark
benchmark();
