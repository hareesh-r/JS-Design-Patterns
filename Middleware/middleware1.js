import express from 'express';
import logger from './middlewares/logger.js'; // Import the logger middleware
import cors from 'cors'; // Import CORS middleware

const app = express();
const PORT = 3000;

// Use the logger middleware for all routes
app.use(logger);

// Allow specific origins
const corsOptions = {
    origin: 'http://example.com',
    methods: 'GET,POST' // Restrict methods if needed
};

// Apply CORS with options  - This is another Middleware
app.use(cors(corsOptions));

// A simple GET route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});


app.get('/about', (req, res) => {
    res.send('About us page');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
