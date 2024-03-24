import styled from "styled-components";
import "../../colors.css";
import cancelIcon from "../../images/cancel-icon.png";
import facebook from "../../images/akar-icons_facebook-fill.png";
import linkimg from "../../images/link2.png";
import CopyToClipboard from "react-copy-to-clipboard";
import ShareKakao from "./ShareKakao";

function SNSIcons({
  className,
  folderId,
}: {
  className: string;
  folderId: number;
}) {
  const host = window.location.host;
  let shareLink = `${host}/shared?user=1&folder=${folderId}`;
  return (
    <div className={className}>
      <SNSIcon>
        <ShareKakao folderId={folderId} />
        카카오톡
      </SNSIcon>
      <SNSIcon>
        <SNSImg
          color="#1877f2"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${shareLink}`,
              "페이스북 공유하기",
              "width=600,height=800,location=no,status=no,scrollbars=yes"
            );
          }}
        >
          <img src={facebook} width={18} height={18} alt="facebook" />
        </SNSImg>
        페이스북
      </SNSIcon>
      <SNSIcon>
        <CopyToClipboard text={shareLink}>
          <SNSImg
            color="(#9d9d9d,0.4)"
            onClick={(e) => {
              e.preventDefault(); // 기본 동작 방지
              e.stopPropagation(); // 이벤트 전파 방지
            }}
          >
            <img
              src={linkimg}
              width={18}
              height={18}
              style={{ opacity: 1, zIndex: 9999 }}
              alt="linkimage"
            />
          </SNSImg>
        </CopyToClipboard>
        링크 복사
      </SNSIcon>
    </div>
  );
}
const StyledSNSIcon = styled(SNSIcons)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin: 24px 0 32px 0;
`;
const SNSImg = styled.button`
  background-color: ${(props) => props.color};
  width: 42px;
  height: 42px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;

function ShareModal({
  purpose,
  folderName,
  folderId,
  handleModalOff,
}: {
  purpose: string;
  folderName: string;
  folderId: number;
  handleModalOff: any;
}) {
  return (
    <ModalContainer onClick={handleModalOff}>
      <ModalForm
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseButton onClick={handleModalOff}>
          <img src={cancelIcon} alt="closeButton" />
        </CloseButton>
        <Title>{purpose}</Title>
        <Message>{folderName}</Message>
        <StyledSNSIcon folderId={folderId} className="" />
      </ModalForm>
    </ModalContainer>
  );
}

const SNSIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 13px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalForm = styled.form`
  width: 360px;
  height: 209px;
  background-color: #ffffff;
  border-radius: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: var(--gray10);
  border-radius: 9999px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const Title = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 32px 0 8px 0;
`;

const Message = styled.p`
  color: var(--gray60);
  font-size: 14px;
`;
export default ShareModal;
