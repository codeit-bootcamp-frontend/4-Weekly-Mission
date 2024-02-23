import styled from "styled-components";

const ShareModal = () => {
  return (
    <Box>
      <ShareButtonBox>
        <ShareButtonKakao></ShareButtonKakao>
        <ShareText>카카오톡</ShareText>
      </ShareButtonBox>
      <ShareButtonBox>
        <ShareButtonFacebook></ShareButtonFacebook>
        <ShareText>페이스북</ShareText>
      </ShareButtonBox>
      <ShareButtonBox>
        <ShareButtonCopy></ShareButtonCopy>
        <ShareText>링크 복사</ShareText>
      </ShareButtonBox>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 212px;
  gap: 32px;
  padding: 15px 0 30px;
`;

const ShareButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 67px;
  gap: 10px;
`;

const ShareButton = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: black;
`;

const ShareButtonKakao = styled(ShareButton)`
  background: #fee500;
`;
const ShareButtonFacebook = styled(ShareButton)`
  background: #1877f2;
`;
const ShareButtonCopy = styled(ShareButton)`
  background: #9d9d9d0a;
`;

const ShareText = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #373740;
`;

export default ShareModal;
