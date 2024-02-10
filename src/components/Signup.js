import React from 'react';
import '../style/Signup.css';
import { Link } from 'react-router-dom';
import logo from '../assets/sign/logo.svg';
import google from '../assets/sign/google.svg';
import kakao from '../assets/sign/kakao.svg';

const Signup = () => {
  return (
    <div className='SignupContainer'>
      <div className='LogoContent'>
        <Link to='/' className='LogoLink'>
          <img src={logo} alt='logo img' />
        </Link>
        <p className='LogoMessage'>
          이미 회원이신가요?
          <Link to='/signin' className='LogoMessageLink'>
            로그인 하기
          </Link>
        </p>
      </div>
      <div className='SignContent'>
        <form className='SignForm'>
          <div className='SignInputs'>
            <div className='SignInputContent'>
              <label htmlFor='email'>이메일</label>
              <input
                id='email'
                className='EmailInput'
                type='text'
                placeholder='codeit@codeit.com'
              />
              <span className='ErrorEmailMessage'></span>
            </div>
            <div className='SignInputContent'>
              <label htmlFor='password'>비밀번호</label>
              <div className='SignPasswordContent'>
                <input
                  id='password'
                  className='PasswordInput'
                  type='password'
                  placeholder='‧ ‧ ‧ ‧ ‧ ‧ ‧ ‧'
                />
                <button className='PasswordOnOffToggle' type='button'></button>
              </div>
              <span className='ErrorPasswordMessage'></span>
            </div>
            <div className='SignInputContent'>
              <label htmlFor='password-check'>비밀번호 확인</label>
              <div className='SignPasswordContent'>
                <input
                  id='password-check'
                  className='PasswordCheckInput'
                  type='password'
                  placeholder='‧ ‧ ‧ ‧ ‧ ‧ ‧ ‧'
                />
                <button
                  className='PasswordOnOffToggleCheck'
                  type='button'
                ></button>
              </div>
              <span className='ErrorPasswordCheckMessage'></span>
            </div>
          </div>
          <button className='SignBtn' type='submit'>
            회원가입
          </button>
        </form>
        <div className='SnsContent'>
          <span className='SnsText'>다른 방식으로 가입하기</span>
          <div className='SnsLinks'>
            <Link to='https://www.google.com/' className='SnsLink'>
              <img src={google} alt='google img' />
            </Link>
            <Link to='https://www.kakaocorp.com/page/' className='SnsLink'>
              <img src={kakao} alt='kakao img' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
