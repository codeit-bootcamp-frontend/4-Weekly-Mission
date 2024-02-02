/**
 * 로그인 정보 fetch 함수
 * @param {*} data 이메일, 비밀번호 정보 객체
 * @returns
 */
const confirmLogin = async (data) => {
    const url = 'https://bootcamp-api.codeit.kr/docs/api/sign-in'
    try {
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return result
    } catch (error) {
        console.error('Error during login:', error)
    }
}

const isEmailUsed = async (input) => {
    const emailData = { email: input }

    const url = 'https://bootcamp-api.codeit.kr/docs/api/check-email'
    try {
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(emailData),
        })
        return result.ok
    } catch (error) {
        console.error('Error during email confirmation:', error)
    }
}

export { confirmLogin, isEmailUsed }
