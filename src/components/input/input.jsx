import React, {useState} from "react";
//import classNames from "classnames/bind";
import style from "./input.module.scss";

//const cx = classNames.bind(style);
/*function Input() {
  const [content, setContent] = useState("내용 입력");
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  return <input type="text" value={content} onChange={handleContentChange} />;
}*/

function Input({type, value, onChange, placeholder, className = "", ...props}) {
  return (
    <input
      className={`${style.input} ${classname}`}
      type={type || "text"}
      placeholder={placeholder || "내용입력"}
      value={value || ""}
      onChange={onChange}
      {...props}
    />
  );
}

export default Input;

// scss 모듈이 태그선택자도 중복 피하게 해주나?
// css 예시를 더 많이 찾아보자 플레이스 홀더 확인 class 넣는걸로
