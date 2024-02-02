import headerLogoImg from '../assets/mainlogo.svg'
import {useRef} from 'react'

function Header(){
    const loginBtn = useRef(null);
    const headerUserInfo = useRef(null);
    const headerUserImg = useRef(null);
    const headerUserEmail = useRef(null);
    
    (async function userData() {
        try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
        const result = await response.json();
        console.log(result);
        if (response.ok) {
            loginBtn.current.style.display = "none";
            headerUserInfo.current.style.display = "flex";
            headerUserImg.current.src = result.profileImageSource;
            headerUserEmail.current.textContent = result.email;
        } else {
            console.error(result.error);
        }
        } catch (err) {
        console.error(err);
        }
    })();

    return <header className="gnb">
    <nav className="gnb__nav">
        <a href="/"><img className="gnb__logoImg" src={headerLogoImg} alt="로고 이미지"/></a>
        <div ref={headerUserInfo} className="gnb__userInfo">
            <img ref={headerUserImg} className="gnb__userImg" src={headerUserImg} alt="헤더 유저 이미지"/>
            <span ref={headerUserEmail} className="gnb__email">Codeit@codeit.com</span>
        </div>
        <a ref={loginBtn} className="gnb__login" href="signin.html">로그인</a>
    </nav>
</header>
}

export default Header;