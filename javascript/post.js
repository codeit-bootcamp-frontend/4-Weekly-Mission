/**
 * 로그인 정보 fetch 함수
 * @param {*} data 이메일, 비밀번호 정보 객체
 * @returns
 */
const confirmLogin = async (data) => {
    const url = 'https://bootcamp-api.codeit.kr/api/sign-in'
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (response.ok) {
            const result = await response.json()
            localStorage.setItem('accessToken', result.data.accessToken)
            localStorage.setItem('refreshToken', result.data.refreshToken)
            return response
        }
    } catch (error) {
        console.error('Error during login:', error)
    }
}

const isEmailUsed = async (input) => {
    const emailData = { email: input }

    const url = 'https://bootcamp-api.codeit.kr/api/check-email'
    try {
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(emailData),
        })
        console.log(result.status)
        return !result.ok
    } catch (error) {
        console.error('Error:', error)
    }
}

const confirmSignup = async (data) => {
    const url = 'https://bootcamp-api.codeit.kr/api/sign-up'
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (response.ok) {
            const result = response.json()
            localStorage.setItem('accessToken', result.data.accessToken)
            localStorage.setItem('refreshToken', result.data.refreshToken)
            return response
        }
    } catch (error) {
        console.error('Error during signup:', error)
    }
}

export { confirmLogin, isEmailUsed, confirmSignup }
