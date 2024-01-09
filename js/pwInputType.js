function pwInputTypeChange(eyeIcon, pwInput) {
    eyeIcon.addEventListener("click", () => {
        if(pwInput.type == 'password'){
            pwInput.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        }
        else if(pwInput.type == 'text'){
            pwInput.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    });
}

export { pwInputTypeChange };