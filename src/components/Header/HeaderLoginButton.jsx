import { Link } from "react-router-dom";
function HeaderLoginButton({loginStatus}){
    return (
        <Link 
        style={{
            display : loginStatus ? "none" : "block",
        }}
        className="gnb__login" to="/signin">로그인</Link>
    )
}

export default HeaderLoginButton;