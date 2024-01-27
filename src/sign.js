document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('emailInput');
  const emailEmptyError = document.getElementById('emailEmptyError');
  const emailFormatError = document.getElementById('emailFormatError');

  const passwordInput = document.getElementById('passwordInput');
  const passwordError = document.getElementById('passwordError');
  const passwordCheckError = document.getElementById('passwordCheckError');

  emailInput.addEventListener('focusout', function () {
    if (!emailInput.value.trim()) {
      emailEmptyError.style.display = 'block';
      emailFormatError.style.display = 'none';
    } else {
      emailEmptyError.style.display = 'none';

      // Check for valid email format
      const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailFormat.test(emailInput.value)) {
        emailFormatError.style.display = 'block';
      } else {
        emailFormatError.style.display = 'none';
      }
    }
  });

  passwordInput.addEventListener('focusout', function () {
    if (!passwordInput.value.trim()) {
      passwordError.style.display = 'block';
    } else {
      passwordError.style.display = 'none';
    }
  });
});

function validateLogin() {
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');
  const emailCheckError = document.getElementById('emailCheckError');
  const passwordCheckError = document.getElementById('passwordCheckError');

  // Check for predefined email and password
  if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
    // Redirect to the "/folder" page
    window.location.href = '/folder';
  } else {
    // Check for other login attempts
    if (emailInput.value !== 'test@codeit.com') {
      emailCheckError.style.display = 'block';
    } else {
      emailCheckError.style.display = 'none';
    }

    if (passwordInput.value !== 'codeit101') {
      passwordCheckError.style.display = 'block';
    } else {
      passwordCheckError.style.display = 'none';
    }

    // Your existing validation logic here
    // ...

    // For testing purposes, let's just alert a success message
    alert('Login successful!');
  }
}

// Add an event listener for the Enter key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    validateLogin();
  }
});