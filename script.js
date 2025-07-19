function validateLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Hardcoded credentials (for demo only)
  const validUsername = "admin";
  const validPassword = "password123";

  if (username === validUsername && password === validPassword) {
    window.location.href = "main.html";
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
}