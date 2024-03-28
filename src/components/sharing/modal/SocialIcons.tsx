import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { shareKakao } from "../../../utils/shareUtils";
import { useFolder } from "../../../contexts/FolderContext";
import * as Icons from "../Icons";
import Button from "../Button";

const IconsContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const IconText = styled.span`
  font-size: 13px;
  font-weight: 400;
  text-align: center;
`;

const ShareButton = styled(Button)`
  background: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function SocialIcons() {
  const { currentFolder } = useFolder();
  return (
    <>
      <IconsContainer>
        <ShareButton
          variant="icon"
          onClick={() => shareKakao(currentFolder.id)}
        >
          <Icons.ShareKakao />
          <IconText>카카오톡</IconText>
        </ShareButton>
        <ShareButton
          variant="icon"
          onClick={() => shareKakao(currentFolder.id)}
        >
          <Icons.ShareFacebook />
          <IconText>페이스북</IconText>
        </ShareButton>{" "}
        <CopyToClipboard
          text={`http://localhost:3000/shared/${currentFolder.id}`}
          onCopy={() => alert("클립보드에 복사되었습니다.")}
        >
          <ShareButton
            variant="icon"
            onClick={() => shareKakao(currentFolder.id)}
          >
            <Icons.ShareLink />
            <IconText>링크 복사</IconText>
          </ShareButton>
        </CopyToClipboard>
      </IconsContainer>
    </>
  );
}

export default SocialIcons;
