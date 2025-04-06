const credentials = {
    "23P31A4256": "weblock",
    "23P31A4257": "weblock123",
    "23P31A4258": "smartapp"
  };
  
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
  
    if (credentials[username] && credentials[username] === password.toLowerCase()) {
      window.location.href = "home.html";
    } else {
      error.textContent = "Invalid credentials. Please try again.";
    }
  }
  