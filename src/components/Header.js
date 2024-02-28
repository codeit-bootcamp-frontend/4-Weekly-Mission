import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'; // 데이터를 가져오기 위해 axios 추가
import '../css/Header.css';

function Header(){
  const [isLoggedIn, setIsLoggedIn] = useState(false); // isLoggedIn 상태 추가
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // useEffect를 이용하여 컴포넌트가 마운트될 때 로그인 상태 확인
    axios.get('https://bootcamp-api.codeit.kr/api/sample/user')
      .then(response => {
        setIsLoggedIn(true); // 로그인 상태 업데이트
        setUserData(response.data);
      })
      .catch(error => {
        setIsLoggedIn(false); // 로그인 상태 업데이트
        console.error('Error fetching profile data: ', error);
      });
      
  }, []); // 빈 배열을 두어 한 번만 실행되도록 설정


  return(
    <div className="headerBox">
      <Link to="/"><img src='/img/logo.svg' className="logo" alt="로고"/></Link>
      {isLoggedIn ? (
        <div className='profil'>
          <img src={userData ? userData.profileImageSource : '/img/loading.gif'} alt="프로필 이미지"></img>
          <p>{userData ? userData.email : ""}</p>
        </div>
      ) : (
        <Link to="/Signin" className="login">로그인</Link>
      )
      }
    </div>
  );
}

export default Header;