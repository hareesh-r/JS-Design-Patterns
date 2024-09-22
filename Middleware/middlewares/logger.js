function logger(req, res, next) {
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Move to the next middleware or route
}

export default logger;
