function validateLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // List of valid username-password pairs
  const credentials = {
    admin: "PASSWORD123",
    user: "securePass!",
    human: "rAndom1234",
    aname: "Apassword$",
    monkey: "anotherPass",
  };

  if (credentials[username] === password) {
    window.location.href = "main.html";
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
}