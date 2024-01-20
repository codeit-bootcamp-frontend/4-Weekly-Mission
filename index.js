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
  var regex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return email != "" && email != "undefined" && regex.test(email);
}

// Remove Error Message when mouseover
function remove_error_message(e) {
  const div = document.querySelector(".error");
  if (div) {
    div.remove();
  }
}

function check_id_and_password(e) {
  e.preventDefault();
  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    console.log("로그인 성공");
    window.location.href = "success.html";
  } else {
    const div1 = document.createElement("div");
    // Add class
    div1.classList.add("error");

    // Add textContent
    div1.textContent = "이메일을 확인해 주세요";

    // Append div tag to emailInputContainer
    emailInputContainer.append(div1);

    // Create div tag
    const div2 = document.createElement("div");
    // Add class
    div2.classList.add("error");

    // Add textContent
    div2.textContent = "비밀번호를 확인해 주세요.";

    // Append div tag to emailInputContainer
    passwordInputContainer.append(div2);
  }
}

console.log(form);

emailInput.addEventListener("mouseover", remove_error_message);
emailInput.addEventListener("mouseout", email_check);

passwordInput.addEventListener("mouseover", remove_error_message);
passwordInput.addEventListener("mouseout", password_check);

form.addEventListener("submit", check_id_and_password);
