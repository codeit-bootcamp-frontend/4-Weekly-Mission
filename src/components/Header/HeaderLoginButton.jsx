function HeaderLoginButton({loginStatus}){
    return (
        <a 
        style={{
            display : loginStatus ? "none" : "block",
        }}
        className="gnb__login" href="signin.html">로그인</a>
    )
}

export default HeaderLoginButton;