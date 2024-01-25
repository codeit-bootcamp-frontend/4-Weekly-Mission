const togglePasswordByEyecon = (passwordInput, isPasswordCovered, eyecon) => {
    const coverEye = '../image/icon/eye_closed.svg'
    const openEye = '../image/icon/eye_open.svg'
    passwordInput.type = isPasswordCovered ? 'password' : 'text'
    eyecon.src = isPasswordCovered ? coverEye : openEye
}

export { togglePasswordByEyecon }
