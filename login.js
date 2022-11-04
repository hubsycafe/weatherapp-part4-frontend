// Insert your code here
const registerButton = document.querySelector("#register");
const loginButton = document.querySelector("#connection");

function handleRegister() {
  const name = document.querySelector("#registerName").value;
  const email = document.querySelector("#registerEmail").value;
  const password = document.querySelector("#registerPassword").value;
  fetch("http://localhost:3000/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        window.location.assign("http://127.0.0.1:5500/index.html");
      }
    });
}

function handleLogin() {
  const email = document.querySelector("#connectionEmail").value;
  const password = document.querySelector("#connectionPassword").value;
  fetch("http://localhost:3000/users/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        window.location.assign("http://127.0.0.1:5500/index.html");
      }
    });
}

registerButton.addEventListener("click", handleRegister);
loginButton.addEventListener("click", handleLogin);
