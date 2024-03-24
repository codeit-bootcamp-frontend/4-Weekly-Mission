import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_PATH } from '../../services/api-path';
import { REGEXP_PASSWORD } from '../../utils/regExp';
import FETCH_API from '../../services/fetch-data';

const ACCESSTOKEN = 'accessToken';

const INITIAL_ERROR_MESSAGE = {
  email: '',
  password: '',
  passwordConfirm: ''
};

function AuthForm({ option }) {
  const navigate = useNavigate();
  // 패스워드 인풋 타입 변경
  const [inputType, setInputType] = useState({
    password: 'password',
    passwordConfirm: 'password'
  });

  // 에러 메세지
  const [errorMsg, setErrorMsg] = useState(INITIAL_ERROR_MESSAGE);

  // 인풋 값 처리
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  });

  // 인풋 값 변경
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
  };

  // 패스워드 인풋 타입, 아이콘 변경
  const handlePasswordVisible = (name) => {
    if (inputType[name] === 'password') {
      setInputType({ ...inputType, [name]: 'text' });
      return;
    }
    setInputType({ ...inputType, [name]: 'password' });
  };

  // 로그인 로직
  const login = async () => {
    try {
      const userInfo = {
        email: userInput.email,
        password: userInput.password
      };
      const response = await FETCH_API.post(API_PATH.SIGNIN, userInfo);
      if (!response.ok) {
        setErrorMsg((prevErrorMsg) => ({
          ...prevErrorMsg,
          email: '이메일을 확인해 주세요!',
          password: '비밀번호를 확인해 주세요!'
        }));
        throw new Error('로그인 에러 발생');
      }
      const result = await response.json();
      setErrorMsg(INITIAL_ERROR_MESSAGE);
      localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
      navigate('/share');
    } catch (error) {
      console.error(error);
    }
  };

  // 패스워드 인풋 값 비교
  const passwordCompare = (password, passwordConfirm) => {
    if (password === passwordConfirm) {
      return;
    }
    setErrorMsg({
      email: '',
      password: '두 비밀번호가 일치하지 않습니다!',
      passwordConfirm: '두 비밀번호가 일치하지 않습니다!'
    });
    throw new Error('비밀번호 일치 오류!');
  };

  // 비밀번호 형식 확인
  const checkPasswordFormat = (password) => {
    if (REGEXP_PASSWORD.test(password)) {
      return;
    }
    setErrorMsg({
      email: '',
      password: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요!',
      passwordConfirm: ''
    });
    throw new Error('비밀번호 형식 오류!');
  };

  // 회원가입 로직(이메일 중복 확인)
  const register = async () => {
    try {
      passwordCompare(userInput.password, userInput.passwordConfirm);
      checkPasswordFormat(userInput.password);
      const emailCheckResponse = await FETCH_API.post(API_PATH.CHECK_EMAIL, {
        email: userInput.email
      });
      if (!emailCheckResponse.ok) {
        setErrorMsg({
          email: '중복된 이메일 입니다!',
          password: '',
          passwordConfirm: ''
        });
        throw new Error('중복된 이메일!');
      }
      const userInfo = {
        email: userInput.email,
        password: userInput.password
      };
      const registerResponse = await FETCH_API.post(API_PATH.SIGNUP, userInfo);
      if (!registerResponse.ok) {
        setErrorMsg((prevErrorMsg) => ({
          ...prevErrorMsg,
          email: '이메일을 확인해 주세요!',
          password: '비밀번호를 확인해 주세요!'
        }));
        throw new Error('회원가입 실패');
      }
      const result = await registerResponse.json();
      localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
      setErrorMsg(INITIAL_ERROR_MESSAGE);
      navigate('/share');
    } catch (err) {
      console.error(err);
    }
  };

  // 폼 제출
  const handleFormSumbit = (e) => {
    e.preventDefault();
    if (option) {
      // option => true일 경우 회원가입, false인 경우 로그인
      register();
      return;
    }
    login();
  };

  return (
    <form className="sign__form" onSubmit={handleFormSumbit}>
      <div className="sign__input--area">
        <div className="sign__email">
          <label className="sign__label" htmlFor="input--email">
            이메일
          </label>
          <input
            id="input--email"
            className="sign--input--email"
            type="email"
            name="email"
            required
            value={userInput.email}
            onChange={handleInputChange}
          />
          {errorMsg && <p className="sign__email--error">{errorMsg.email}</p>}
        </div>

        <div className="sign__password">
          <div className="signin__password--relative">
            <label className="sign__label" htmlFor="input--password">
              비밀번호
            </label>
            <input
              id="input--password"
              className="sign--input--password"
              type={inputType.password}
              name="password"
              required
              value={userInput.password}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon
              className="eye"
              icon={inputType.password === 'password' ? faEye : faEyeSlash}
              onClick={() => handlePasswordVisible('password')}
            />
            {errorMsg && <p className="sign__password--error">{errorMsg.password}</p>}
          </div>
        </div>

        {option && (
          <div className="sign__password--confirm">
            <label className="sign__label" htmlFor="input--password--confirm">
              비밀번호 확인
            </label>
            <div className="signin__password--confirm--relative">
              <input
                id="input--password--confirm"
                className="sign--input--password--confirm"
                type={inputType.passwordConfirm}
                name="passwordConfirm"
                required
                value={userInput.passwordConfirm}
                onChange={handleInputChange}
              />
              <FontAwesomeIcon
                className="eye--confirm"
                icon={inputType.passwordConfirm === 'password' ? faEye : faEyeSlash}
                onClick={() => handlePasswordVisible('passwordConfirm')}
              />
              {errorMsg && <p className="sign__password--confirm--error">{errorMsg.passwordConfirm}</p>}
            </div>
          </div>
        )}
      </div>
      <button className="sign__button" type="submit">
        회원가입
      </button>
    </form>
  );
}

export default AuthForm;
