import GoogleBackImg from "../../assets/google.svg";
import GoogleImg from "../../assets/google.png";
import KaKaoImg from "../../assets/kakao.svg";
import KaKaoBackImg from "../../assets/kakao1.svg";
function SocialLogin(){
    return (
        <div className="sign__sns">
            <div className="sign__sns--text">소셜 로그인</div>
            <ul className="sign__sns__box">
                <li className="sign__sns--img">
                    <a href="https://accounts.google.com/v3/sign/identifier?continue=https%3A%2F%2Fwww.google.co.kr%2F&hl=ko&ifkv=ASKXGp0usEBRKVEBO5EtWiJHDLtwnyf7M7P3rpqMLrX0kDh0X-K3nM_RKp3PZN_oEhSEToKrIe0knw&sacu=1&flowName=WebLitesign&flowEntry=ServiceLogin&dsh=S1745209018%3A1704038759981611">
                        <img src={GoogleBackImg} alt="구글 배경 이미지"/>
                        <img className="sign__sns--google"  src={GoogleImg} alt="구글 이미지"/>
                    </a>
                </li>
                <li className="sign__sns--img">
                    <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fproxy%3DeasyXDM_Kakao_ufgogg1pao_provider%26ka%3Dsdk%252F1.43.1%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FMacIntel%2520origin%252Fhttps%25253A%25252F%25252Fwww.epis.or.kr%26origin%3Dhttps%253A%252F%252Fwww.epis.or.kr%26response_type%3Dcode%26redirect_uri%3Dkakaojs%26state%3Df2wre2u2r4wcxw70tfk7uq%26through_account%3Dtrue%26client_id%3D950f3ae1f2f550e5ba7ff7d9fffc7781&talk_login=hidden#login">
                        <img className="sign__sns--kakao" src={KaKaoImg} alt="카카오 이미지"/>
                        <img src={KaKaoBackImg} alt="카카오 배경 이미지"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLogin;