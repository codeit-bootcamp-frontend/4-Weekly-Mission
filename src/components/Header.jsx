import HeaderLogoImg from '../assets/mainlogo.svg';
import {useEffect, useState} from 'react';
import { API_PATH_SAMPLE_USER_INFO } from '../services/api-path';

function Header(){
    const [loginStatus, setLoginStatus] = useState(false);
    const [userEmail, setUserEmail] = useState(null);
    const [userProfileImg, setUserProfileImg] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const userData = async () => {
            try {
            const response = await fetch(API_PATH_SAMPLE_USER_INFO, {
                    method: "GET",
                    signal
                });
            const result = await response.json();   
            if (!response.ok) {
                throw new Error("API 요청 에러 발생");
            }
            // console.log(result);
            setLoginStatus(true);
            setUserEmail(result.email);
            setUserProfileImg(result.profileImageSource);
            } catch (e) {
                console.error(e);
            }
        }
        userData();
        // 언마운트 실행 strictMode라서 한번 언마운트 된다.
        return () => controller.abort();
    }, [])

    return <header className="gnb">
    <nav className="gnb__nav">
        <a href="/"><img className="gnb__logoImg" src={HeaderLogoImg} alt="로고 이미지"/></a>
        <div
        style={{
            display : loginStatus ? "flex" : "none",
        }}
         className="gnb__userInfo">
            <img className="gnb__userImg" src={userProfileImg} alt="헤더 유저 이미지"/>
            <span className="gnb__email">{userEmail}</span>
        </div>
        <a 
        style={{
            display : loginStatus ? "none" : "block",
        }}
        className="gnb__login" href="signin.html">로그인</a>
    </nav>
</header>
}

export default Header;