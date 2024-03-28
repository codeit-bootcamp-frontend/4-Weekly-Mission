import { useState, ChangeEvent } from 'react';
import styles from './Input.module.scss';
import Image from 'next/image';
//import eyeIcon from '/images/eye-on.svg';
//import eyeSlashIcon from '/images/eye-off.svg';

interface InputProps {
  type: string;
  labelText: string;
  placeholder: string;
}

const PASSWORD: string = 'password';
const TEXT: string = 'text';
const eyeIcon = '/images/eye-on.svg';
const eyeSlashIcon = 'images/eye-off.svg';
const REGEXP_EMAIL = new RegExp('[a-z0-9]+@[a-z]+.[a-z]'); // 이메일 정규 표현식
const REGEXP_PASSWORD = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/); // 영문, 숫자 1개 이상 포함 및 8자 이상

const Input = ({ type, labelText, placeholder }: InputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isView, setIsView] = useState(false);
  const [isError, setIsError] = useState('');

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setIsView((prev) => !prev);
  };

  const handleError = () => {
    if (labelText === '이메일') {
      if (!REGEXP_EMAIL.test(inputValue)) {
        setIsError('이메일을 확인해주세요');
        return;
      } else {
        setIsError('');
        return;
      }
    }
    !REGEXP_PASSWORD.test(inputValue) ? setIsError('비밀번호를 확인해주세요') : setIsError('');
  };

  return (
    <>
      <div className={styles.inputBox}>
        <label htmlFor={labelText} className={styles.labels}>
          {labelText}
        </label>
        <input
          id={labelText}
          onChange={(e) => handleInputValue(e)}
          onBlur={handleError}
          className={isError ? styles.inputError : styles.input}
          type={!isView ? TEXT : PASSWORD}
          placeholder={placeholder}
        />
        {type === PASSWORD && (
          <Image
            data-status={labelText}
            className={styles.eyeIcon}
            src={isView ? eyeSlashIcon : eyeIcon}
            width={16}
            height={16}
            alt="눈 모양 아이콘"
            onClick={handleClick}
          />
        )}
      </div>
      {isError && <div className={styles.errorMessage}>{isError}</div>}
    </>
  );
};

export default Input;
