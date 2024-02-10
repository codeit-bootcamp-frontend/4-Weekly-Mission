import SocialLogin from "../components/auth/SocialLogin";
import AuthTitle from "../components/auth/AuthTitle";
import AuthForm from "../components/auth/AuthForm";
import "../styles/sign.css";
function Register(){
    return (
        <div className="wrap">
            <main className="sign">
            <div className="sign__box">
                <AuthTitle text="회원이 아니신가요?" action="/signup" actionText="회원 가입하기"/>
                <AuthForm option={true}/>
            </div>
            <SocialLogin/>
                </main>
        </div>
    )
}

export default Register;