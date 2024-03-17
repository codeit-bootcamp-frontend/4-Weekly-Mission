import style from "./input.module.scss";
import eyeOn from "../../assets/eye-on.svg";
import eyeOff from "../../assets/eye-off.svg";
import {useState} from "react";

const LabelContent = ({htmlFor}) => {
  if (htmlFor === "email") {
    return <label htmlFor={htmlFor}>이메일</label>;
  } else if (htmlFor === "password") {
    return <label htmlFor={htmlFor}>비밀번호</label>;
  }
  return null;
};

function Input({type, value, onChange, placeholder, htmlFor, className = "", ...props}) {
  const [isPassword, setIsPassword] = useState({
    type: "password",
    visible: false,
  });

  const handlePassword = () => {
    setIsPassword(() => {
      if (!isPassword.visible) {
        return {type: "text", visible: true};
      } else {
        return {type: "password", visible: false};
      }
    });
  };
  // 왜 type 안변할까요? => 성공 ~~

  const passwordImg = type === "password" && (
    <img
      src={isPassword.visible ? eyeOn : eyeOff}
      alt="password Show"
      onClick={handlePassword}
      className={style.eyeImg}
    />
  );
  return (
    <div className={style.input}>
      {LabelContent({htmlFor})}
      <div className={style.inputBox}>
        <div className={style.inputFrame}>
          <input
            className={`${style.inputContent} ${className}`}
            id={htmlFor}
            type={isPassword.type}
            placeholder={placeholder || "내용입력"}
            value={value || ""}
            onChange={onChange}
            {...props}
          />
          {passwordImg}
        </div>
      </div>
    </div>
  );
}
export default Input;

// scss 모듈이 태그선택자도 중복 피하게 해주나?
// -> css 선택자 input 태그선택자로 하면 다른곳에서 충돌??(class 선택자로 css넣는걸로), 플레이스 홀더 알아보기

// 웹접근성을 위해서는 label태그를 써야한다 (명시적 작성방식) -> 작업완료

//   const passwordImg = type === "password" && <img src={passwordEye} alt="password Show" />;
// 첫 번째 참(true)이면, 두 번째 피연산자를 평가하고 그 값을 반환합니다.
// 첫 번째 거짓(false)이면, 두 번째 피연산자를 평가하지 않고 첫 번째 피연산자를 반환합니다.
// -> 그럼 type === "password 가 반환되서.. type === "text" 지정해도 변경되는거 아닌가..?
// -> 실험결과: console.log(passwordImg); => false,  console.log(type); => text
// -> 왜 이렇게 되는거죠??
