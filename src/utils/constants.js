import eyeOnImg from '../assets/eye-on.svg';
import eyeOffImg from '../assets/eye-off.svg';

export const EMAILREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
export const PASSWORDREGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const HREF = {
  BASE_URL: 'https://bootcamp-api.codeit.kr',
  FACEBOOK: 'https://www.facebook.com',
  TWITTER: 'https://www.twitter.com',
  YOUTUBE: 'https://www.youtube.com',
  INSTAGRAM: 'https://www.instagram.com',
  GOOGLE: 'https://www.google.com',
  KAKAO: 'https://www.kakao.com',
};

export const FORM_MSG = {
  SIGNIN_CHECK_MSG: '회원이 아니신가요?',
  SIGNUP_CHECK_MSG: '이미 회원이신가요?',
  SIGNIN_LINK: '회원 가입하기',
  SIGNUP_LINK: '로그인 하기',
  SIGNIN_SOCIAL: '소셜 로그인',
  SIGNUP_SOCIAL: '다른 방식으로 가입하기',
};

export const INPUT_TYPE = {
  email: {
    title: '이메일',
    type: 'email',
    errorMsg: 'email-error',
    id: 'email',
  },
  password: {
    title: '비밀번호',
    type: 'password',
    errorMsg: 'password-error',
    eyeOn: eyeOnImg,
    eyeOff: eyeOffImg,
    id: 'password',
  },
  passwordCheck: {
    title: '비밀번호 확인',
    type: 'password',
    errorMsg: 'password-check-error',
    eyeOn: eyeOnImg,
    eyeOff: eyeOffImg,
    id: 'password-check',
  },
};

export const ERROR_MESSAGE = {
  EMPTY_EMAIL: '이메일을 입력해주세요.',
  EMPTY_PASSWORD: '비밀번호를 입력해주세요.',
  UNVAILDEMAILFORMAT: '올바른 이메일 주소가 아닙니다.',
  UNVALID_EMAIL: '이메일을 확인해 주세요.',
  UNVALID_PASSWORD: '비밀번호를 확인해 주세요.',
  ALREADYUSEEMAIL: '이미 사용중인 이메일입니다.',
  UNVAILDPASSOWRDFORMAT: '비밀번호 영문,숫자 조합 8자 이상 입력해 주세요.',
  DIFFERPASSOWRD: '비밀번호가 일치하지 않아요.',
};

export const TITLE = {
  TITLE_LINK: () => (
    <h2 className='content-title'>
      <span className='gradient-link'>원하는 링크</span>를 저장하세요
    </h2>
  ),
  TITLE_MANAGE: () => (
    <h2 className='content-title'>
      링크를 폴더로<span className='gradient-manage'>관리</span>하세요
    </h2>
  ),
  TITLE_SHARE: () => (
    <h2 className='content-title'>
      저장한 링크를<span className='gradient-share'>공유</span>해 보세요
    </h2>
  ),
  TITLE_SEARCH: () => (
    <h2 className='content-title'>
      저장한 링크를<span className='gradient-search'>검색</span>해 보세요
    </h2>
  ),
};

export const DESCRIPTION = {
  DESCRIPTION_LINK: () => (
    <p className='content-text'>
      나중에 읽고 싶은 글, 다시 보고 싶은 영상,
      <br className='pc-br tablet-br' />
      사고 싶은 옷, 기억하고 싶은 모든 것을
      <br className='pc-br tablet-br' />한 공간에 저장하세요.
    </p>
  ),
  DESCRIPTION_MANAGE: () => (
    <p className='content-text'>
      나만의 폴더를 무제한으로 만들고
      <br className='pc-br tablet-br' />
      다양하게 활용할 수 있습니다.
    </p>
  ),
  DESCRIPTION_SHARE: () => (
    <p className='content-text'>
      여러 링크를 폴더에 담고 공유할 수<br className='tablet-br' /> 있습니다.
      <br className='pc-br' />
      가족, 친구, 동료들에게 쉽고
      <br className='tablet-br' /> 빠르게 링크를
      <br className='pc-br' />
      공유해 보세요.
    </p>
  ),
  DESCRIPTION_SEARCH: () => (
    <p className='content-text'>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
  ),
};
