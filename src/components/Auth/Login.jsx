import SocialLogin from "./SocialLogin";
import AuthTitle from "./AuthTitle";
import AuthForm from "./AuthForm";
import "../styles/signin.css";
import "../styles/signup.css";
function Login(){
    return (
        <main className="signin">
        <div className="signin__box">
            <AuthTitle text="이미 회원이신가요?" action="로그인 하기"/>
            <AuthForm option={false}/>
        </div>
        <SocialLogin/>
    </main>
    )
}

export default Login;