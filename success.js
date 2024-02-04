const logOutButton = document.getElementById("logOut");
const goHome = document.getElementById("goHome");

function logOut() {
  localStorage.removeItem("accessToken");
  location.href = "./signin.html";
}

function goHomeFunction() {
  location.href = "./index.html";
}

logOutButton.addEventListener("click", logOut);
goHome.addEventListener("click", goHomeFunction);
