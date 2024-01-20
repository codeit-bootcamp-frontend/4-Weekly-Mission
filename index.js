// Email Input Tag
const emailInput = document.querySelector(".sign-input");
// Email Input Container
const emailInputContainer = document.querySelector(".sign-input-box");

// Password Input Tag
const passwordInput = document.querySelector(
  ".sign-input-box.sign-password .sign-input"
);

// Password Input Container
const passwordInputContainer = document.querySelector(
  ".sign-input-box.sign-password"
);

// Sign In Button
const signInButton = document.querySelector(".cta");

// Form Tag
const form = document.querySelector(".sign-form");

// Toggle Password Button
const togglePasswordButton = document.getElementById("toggle-password");

// Check Email Input area is Empty or Right email format when mouseout
function email_check(e) {
  // When Email is Empty
  if (emailInput.value === "") {
    // Create div tag
    const div = document.createElement("div");
    // Add class
    div.classList.add("error");

    // Add textContent
    div.textContent = "이메일을 입력해주세요.";

    // Append div tag to emailInputContainer
    emailInputContainer.append(div);
  } else if (!email_format_check(emailInput.value)) {
    // When Email is not Right Format
    // Create div tag
    const div = document.createElement("div");
    // Add class
    div.classList.add("error");

    // Add textContent
    div.textContent = "이메일 형식이 올바르지 않습니다.";

    // Append div tag to emailInputContainer
    emailInputContainer.append(div);
  } else {
    // When Email is Right Format
    return;
  }
}

function password_check(e) {
  // When Password is Empty
  if (passwordInput.value === "") {
    // Create div tag
    const div = document.createElement("div");
    // Add class
    div.classList.add("error");

    // Add textContent
    div.textContent = "비밀번호를 입력해주세요.";

    // Append div tag to emailInputContainer
    passwordInputContainer.append(div);
  } else {
    // When Password is Right Format
    return;
  }
}

// Check Email Format (regex)
function email_format_check(email) {
  // regex that check email format
  var regex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  // if email is not empty and not undefined and email format is right, return true
  return email != "" && email != "undefined" && regex.test(email);
}

// Remove Error Message when mouseover
function remove_error_message(e) {
  const div = document.querySelector(".error");
  if (div) {
    div.remove();
  }
}

// Check Email and Password when id = "test@codeit" and password = "codeit101"
function check_id_and_password(e) {
  // block default behavior
  e.preventDefault();

  // check email and password
  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    console.log("로그인 성공");
    window.location.href = "success.html"; // redirect to success.html
  } else {
    // Create div tag for email error message
    const div1 = document.createElement("div");
    // Add class
    div1.classList.add("error");

    // Add textContent
    div1.textContent = "이메일을 확인해 주세요";

    // Append div tag to emailInputContainer
    emailInputContainer.append(div1);

    // Create div tag for password error message
    const div2 = document.createElement("div");
    // Add class
    div2.classList.add("error");

    // Add textContent
    div2.textContent = "비밀번호를 확인해 주세요.";

    // Append div tag to emailInputContainer
    passwordInputContainer.append(div2);
  }
}

// Toggle Password
function togglePassword(e) {
  const password = document.getElementById("password");
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.src = type === "password" ? "./images/eye-off.svg" : "./images/eye.svg";
}

// Event Listener
emailInput.addEventListener("mouseover", remove_error_message); // remove error message when mouseover
emailInput.addEventListener("mouseout", email_check); // check email format when mouseout

passwordInput.addEventListener("mouseover", remove_error_message); // remove error message when mouseover
passwordInput.addEventListener("mouseout", password_check); // check password format when mouseout

form.addEventListener("submit", check_id_and_password); // check email and password when submit

togglePasswordButton.addEventListener("click", togglePassword);
