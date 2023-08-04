
const allowFrontendMiddleware = (req, res, next) => {
    // Allow-origin from frontend
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
}

module.exports = allowFrontendMiddleware
