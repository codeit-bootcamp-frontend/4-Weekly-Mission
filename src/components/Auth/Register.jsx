import SocialLogin from "./SocialLogin";
import AuthTitle from "./AuthTitle";
import AuthForm from "./AuthForm";
import "../../styles/signin.css";
import "../../styles/signup.css";
function Register(){
    return (
        <main className="signup">
        <div className="signup__box">
            <AuthTitle text="회원이 아니신가요?" action="회원 가입하기"/>
            <AuthForm option={true}/>
        </div>
        <SocialLogin/>
    </main>
    )
}

export default Register;