import React from 'react';
import '../style/Signin.css';
import { Link } from 'react-router-dom';
import logo from '../assets/sign/logo.svg';
import google from '../assets/sign/google.svg';
import kakao from '../assets/sign/kakao.svg';

const Signin = () => {
  return (
    <div className='SigninContainer'>
      <div className='LogoContent'>
        <Link to='/' className='LogoLink'>
          <img src={logo} alt='logo img' />
        </Link>
        <p className='LogoMessage'>
          회원이 아니신가요?{' '}
          <Link to='/signup' className='LogoMessageLink'>
            회원 가입하기
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
          </div>
          <button className='SignBtn' type='submit'>
            로그인
          </button>
        </form>
        <div className='SnsContent'>
          <span className='SnsText'>소셜 로그인</span>
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

export default Signin;
