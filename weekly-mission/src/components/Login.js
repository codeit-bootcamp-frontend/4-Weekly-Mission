import styled from 'styled-components';


const LoginBtn = styled.span`
    .Login{
        padding:1.6rem 2rem;
        width: 12.8rem;
        text-align: center;
        line-height: 1;
    }
`;

function Login() {
    return (
        <LoginBtn>
            <a href="/" className="btn Login">
                로그인
            </a>
        </LoginBtn>

    )
}

export default Login;