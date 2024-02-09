import LogoImg from "../../assets/logo.svg";
function AuthTitle({text, action}){
    return (
        <div className="signin__title">
            <a href="index.html"><img className="signin__logo" src={LogoImg} alt="로고 이미지"/></a>
            <p className="signin__text">{text} <a className="signin__text--register" href="signup.html">{action}</a></p>
        </div>
    )
}

export default AuthTitle;