import styled from "styled-components";
import { TargetName } from "./ModalDelete";
import { CloseBtn, ModalTitle } from "./ModalFolderEdit";
import kakaoIcon from "../img/Kakao.png";
import facebookIcon from "../img/facebook.png";
import linkIcon from "../img/link.png";

const Modal = styled.div`
  width: 36rem;
  padding: 3.2rem 4rem;
  background-color: #fff;
  border-radius: 15px;
  display: ${({ type }) => (type === "Share" ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

const SharePlatformBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const SharePlatform = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Wrap = styled.div`
  background-color: ${({ backColor }) => backColor};
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlatformImg = styled.img``;

const PlatformName = styled.span`
  color: #373740;
  font-size: 1.3rem;
`;

function ModalShare({ type, dispatch }) {
  return (
    <Modal type={type.type}>
      <CloseBtn
        onClick={() => {
          dispatch({ state: false });
        }}
      />
      <div>
        <ModalTitle>폴더 공유</ModalTitle>
        <TargetName>{type.folderName}</TargetName>
      </div>
      <SharePlatformBox>
        <SharePlatform>
          <Wrap backColor={`rgba(254, 229, 0, 1)`}>
            <PlatformImg src={kakaoIcon} />
          </Wrap>
          <PlatformName>카카오톡</PlatformName>
        </SharePlatform>
        <SharePlatform>
          <Wrap backColor={`rgba(24, 119, 242, 1)`}>
            <PlatformImg src={facebookIcon} />
          </Wrap>
          <PlatformName>페이스북</PlatformName>
        </SharePlatform>
        <SharePlatform>
          <Wrap backColor={`rgba(157, 157, 157, 0.04)`}>
            <PlatformImg src={linkIcon} />
          </Wrap>
          <PlatformName>링크 복사</PlatformName>
        </SharePlatform>
      </SharePlatformBox>
    </Modal>
  );
}

export default ModalShare;
