const http = require('http');
const { authenticateUser } = require('./auth');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/login') {
        const isAuthenticated = authenticateUser('admin', '1234');
        res.end(isAuthenticated ? 'Login Successful' : 'Login Failed');
    } else {
        res.end('Welcome to my Node.js web app');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


