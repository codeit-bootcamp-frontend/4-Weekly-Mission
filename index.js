const logInButton = document.getElementById("logInButton");

console.log(logInButton);

function tokenCheck() {
  const token = localStorage.getItem("accessToken");

  if (token) {
    location.href = "./success.html";
  } else {
    location.href = "./signin.html";
  }
}

logInButton.addEventListener("click", tokenCheck);
