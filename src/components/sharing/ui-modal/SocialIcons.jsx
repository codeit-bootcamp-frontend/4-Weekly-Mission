import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { shareFacebook, shareKakao } from "../../../utils/shareFolderUtils";
import { useFolder } from "../../../contexts/FolderContext";

const IconsContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const IconImage = styled.img`
  width: 42px;
  height: 42px;
`;

const IconText = styled.span`
  font-size: 13px;
  font-weight: 400;
  text-align: center;
`;

const Button = styled.button`
  background: none;
  display: flex;
  flex-direction: column;
  border: none;
  gap: 10px;
`;

function SocialIcons() {
  const { currentFolder } = useFolder();
  return (
    <>
      <IconsContainer>
        <Button onClick={() => shareKakao(currentFolder.id)}>
          <IconImage src="/icons/kakao_share_icon.svg" />
          <IconText>카카오톡</IconText>
        </Button>
        <Button onClick={() => shareFacebook(currentFolder.id)}>
          <IconImage src="/icons/facebook_share_icon.svg" />
          <IconText>페이스북</IconText>
        </Button>
        <CopyToClipboard
          className="Toram"
          text={`http://localhost:3000/shared/${currentFolder.id}`}
          onCopy={() => alert("클립보드에 복사되었습니다.")}
        >
          <Button>
            <IconImage src="/icons/link_copy_icon.svg" />
            <IconText>링크 복사</IconText>
          </Button>
        </CopyToClipboard>
      </IconsContainer>
    </>
  );
}

export default SocialIcons;
