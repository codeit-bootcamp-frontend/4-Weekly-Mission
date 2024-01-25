/**
 * 아이콘 클릭에 따라 비번 숨김 함수
 * @param {*} passwordInput toggle할 비번
 * @param {*} isPasswordCovered 비밀번호 숨김 여부
 * @param {*} eyecon 해당 눈 아이콘
 */
const togglePasswordByEyecon = (passwordInput, isPasswordCovered, eyecon) => {
    const coverEye = '../image/icon/eye_closed.svg'
    const openEye = '../image/icon/eye_open.svg'
    passwordInput.type = isPasswordCovered ? 'password' : 'text'
    eyecon.src = isPasswordCovered ? coverEye : openEye
}

export { togglePasswordByEyecon }
