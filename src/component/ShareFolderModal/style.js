import styled from "styled-components";
import kakaoIcon from "../../images/kakao.svg";
import facebookIcon from "../../images/facebook.svg";
import copyLinkIcon from "../../images/link.svg";

export const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 360px;
  position: relative;

  .ModalX {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 24px;
    height: 24px;
    background-color: #e7effb;
    color: #9fa6b2;
    border-radius: 100%;
    &:hover {
      cursor: pointer;
    }
  }

  * {
    width: 100%;
    text-align: center;
  }

  p {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
    &.folderName {
      font-size: 14px;
      font-weight: 400;
      color: #9fa6b2;
    }
  }

  .linkIcons {
    display: flex;
    margin-top: 24px;
    width: 220px;

    p {
      font-size: 13px;
      font-weight: 500;
    }
  }

  .linkIcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .linkIcon > div {
    width: 42px;
    height: 42px;
    border-radius: 9999px;
    &.kakao {
      background: #fee500 url(${kakaoIcon});
      background-size: 18px;
      background-repeat: no-repeat;
      background-position: center;
    }
    &.facebook {
      background: #1877f2 url(${facebookIcon});
      background-size: 18px;
      background-repeat: no-repeat;
      background-position: center;
    }

    &.copyLink {
      background: rgba(157, 157, 157, 0.04) url(${copyLinkIcon});
      background-size: 18px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;
