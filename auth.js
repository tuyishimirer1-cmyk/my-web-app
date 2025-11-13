// auth.js
function authenticateUser(username, password) {
  // Example: simple check (replace with real auth logic)
  const validUser = "admin";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    return true;
  }
  return false;
}

// Export function for use in index.js
module.exports = { authenticateUser };
