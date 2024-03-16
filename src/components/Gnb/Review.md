## 코드 리뷰

```jsx
import React from "react";
import style from "./gnb.module.scss";
// svg 관리하는 법을 찾아보시면 좋겠습니다. 위와 같은 방식으로 사용시 아이콘의 색이나 크기를 변경할 수 있는 방법인지 생각해보세요.
import logoLarge from "../../assets/logo-large.svg";
import logoSmall from "../../assets/logo-small.svg";
import profileImg from "../../assets/profileImg.svg";

function Gnb({state, size}) {
  // 변수명이 부정확한 것 같습니다. 어떤 값인지 알 수 있게 더 자세히 적어주세요.
  // ex. classname
  const gnb = `${style.gnb} ${style[size]} ${style[state]}`;

  // const 를 사용하는 것이 더 좋습니다. let을 써야만 하는지 고민해보세요.
  let content;
  // 중첩 if 문은 가독성에 좋지 못합니다. early return 문을 고려해보세요.
  if (size === "large") {
    if (state === "default") {
      content = (
        <>
          <img src={logoLarge} alt="logo" />
          <div className={`${style.cta} ${style.large}`}>
            <a href="https://goole.com">로그인</a>
          </div>
        </>
      );
    } else if (state === "registering") {
      content = (
        <>
          <img src={logoLarge} alt="logo" />
          <div className={style.account}>
            <img src={profileImg} alt="profileImg" />
            Codeit@codeit.com
          </div>
        </>
      );
    }
  } else if (size === "small") {
    if (state === "default") {
      content = (
        <>
          <img src={logoSmall} alt="logo" />
          <div className={`${style.cta} ${style.small}`}>
            <a href="https://goole.com">로그인</a>
            // login page 만들고 링크 변경
          </div>
        </>
      );
    } else if (state === "registering") {
      content = (
        <>
          <img src={logoSmall} alt="logo" />
          <img src={profileImg} alt="profileImg" />
        </>
      );
    }
  }
  return (
    <nav className={gnb}>
      <div className={style.frame}>{content}</div>
    </nav>
  );
}

export default Gnb;
```

## 주강사님 참고용

```jsx
import React from "react";
import style from "./gnb.module.scss";
// svg이니 logo size 조절이 가능하게 수정후 하나로 사용하면 좋습니다.
// 지금은 pc/mobile에서 로고 디자인이 다르다는 가정하에 수정합니다.
import logoLarge from "../../assets/logo-large.svg";
import logoSmall from "../../assets/logo-small.svg";
import profileImg from "../../assets/profileImg.svg";

const GnbContent = ({state}) => {
  const isRegistered = state === registering;
  return isRegistered ? (
    <div className={style.account}>
      <img src={profileImg} alt="profileImg" />
      /** mobile에서 안보이게 css로 처리*/
      <p>Codeit@codeit.com</p>
    </div>
  ) : (
    <div className={style.cta}>
      <a href="https://goole.com">로그인</a>
    </div>
  );
};

function Gnb({state, size}) {
  const classname = `${style.gnb} ${style[size]} ${style[state]}`;
  const logo = size === "large" ? logoLarge : logoSmall;

  return (
    <nav className={classname}>
      <div className={style.frame}>
        <img src={logo} alt="logo" />
        <GnbContent state={state} />
      </div>
    </nav>
  );
}

export default Gnb;
```
