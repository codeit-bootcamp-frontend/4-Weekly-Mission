/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Button from "../../../../utils/Button";
import api from "../../../../utils/api";
import "../../../../styles/common.css";

const Avatar = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await api("sample/user");
      setUserEmail(result.email);
      setUserAvatar(result.profileImageSource);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div css={divStyle}>
      <div css={imgWrapperStyle}>
        <img src={userAvatar} css={imageStyle} alt="계정이미지" />
      </div>
      <p css={pStyle}>{userEmail}</p>
      <Button
        name="로그인"
        size="small"
        isLoading={isLoading}
        key={userEmail}
        css={btnCss}
      />
    </div>
  );
};

export default Avatar;

const divStyle = css`
  display: flex;
  gap: 8px;
  justify-contents: center;
`;

const imgWrapperStyle = css`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const pStyle = css`
  display: block;
  font-weight: 400;
  font-size: 14px;
  position: relative;
  top: 4px;

  @media screen and (375px <= width <= 767px) {
    display: none;
  }
`;

const btnCss = css`
  display: block;
`;
