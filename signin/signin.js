//focusout 이벤트 리스너
document
  .getElementById("email-input")
  .addEventListener("focusout", function () {
    let email = this.value;
    let errorMessage = document.getElementById("errorMessage-email");
    if (email === "") {
      console.log("보이기");
      errorMessage.style.display = "block";
    } else {
      console.log("안보이기");
      errorMessage.style.display = "none";
    }
  });

//focusout 이벤트 리스너
document
  .getElementById("passWord-input")
  .addEventListener("focusout", function () {
    let password = this.value;
    let errorMessage = document.getElementById("errorMessage-password");
    if (password === "") {
      console.log("보이기");
      errorMessage.style.display = "block";
    } else {
      console.log("안보이기");
      errorMessage.style.display = "none";
    }
  });

//focusin 이벤트 리스너
document.getElementById("email-input").addEventListener("focusin", function () {
  let errorMessage = document.getElementById("errorMessage-email");
  errorMessage.style.display = "none";
});

//focusin 이벤트 리스너
document
  .getElementById("passWord-input")
  .addEventListener("focusin", function () {
    let errorMessage = document.getElementById("errorMessage-password");
    errorMessage.style.display = "none";
  });

const loginForm = document.getElementById();
