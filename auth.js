// auth.js
function authenticateUser(username, password) {
    // Simple user database
    const users = [
        { username: 'admin', password: '1234' },
        { username: 'user1', password: 'pass1' }
    ];

    return users.some(u => u.username === username && u.password === password);
}

module.exports = { authenticateUser };


