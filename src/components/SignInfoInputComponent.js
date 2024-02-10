import React, { useEffect, useState } from "react";
import styles from "../styles/SigninPage.module.css";

const SignInfoInputComponent = ({
  name,
  changeEvent,
  validText,
  setValidText,
  pwType = false,
}) => {
  const [inputStyle, setInputStyle] = useState({});
  const [isFocus, setIsFoucs] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    let borderStyle = "";
    if (validText !== "") {
      borderStyle = "1px solid #FF5B56";
    } else {
      borderStyle = isFocus ? "1px solid #6D6AFE" : "1px solid #CCD5E3";
    }
    setInputStyle({ border: borderStyle, outline: "none" });
  }, [validText]);

  const changePwType = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <input
        style={inputStyle}
        type={pwType && isHidden ? "password" : "text"}
        name={name}
        onFocus={() => {
          setIsFoucs(true);
          setValidText("");
        }}
        onBlur={(e) => {
          setIsFoucs(false);
          changeEvent(e);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            changeEvent(e);
          }
        }}
      />
      <p className={styles.valid_text}>{validText}</p>
      {pwType ? (
        <button id="pw-hidden-btn" type="button" onClick={() => changePwType()}>
          {isHidden ? (
            <img src="./images/eye-off.svg" />
          ) : (
            <img src="./images/eye-on.svg" />
          )}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default SignInfoInputComponent;
