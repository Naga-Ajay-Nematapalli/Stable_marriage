const app = require('../server');

module.exports = (req, res) => {
    // If Vercel rewrote req.url to the function entry path, recover the intended path
    const matchedPath = req.headers['x-matched-path'];
    if (matchedPath && (req.url.startsWith('/api/index') || req.url === '/api')) {
        const queryIndex = req.url.indexOf('?');
        const queryString = queryIndex !== -1 ? req.url.slice(queryIndex) : '';
        req.url = matchedPath.includes('?') ? matchedPath : (matchedPath + queryString);
    }
    return app(req, res);
};
