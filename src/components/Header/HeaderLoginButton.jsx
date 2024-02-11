import { Link } from "react-router-dom";
function HeaderLoginButton(){
    return (
        <Link className="gnb__login" to="/signin">로그인</Link>
    )
}

export default HeaderLoginButton;