import styled from "styled-components";
import LinkAdderButton from "./ActionButtons/LinkAdderButton";
import ActionButtons from "./ActionButtons/ActionButtons";

const StyledFolderButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;
const StyledButton = styled.button`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;

  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default function FolderButtons() {
  return (
    <>
      <StyledFolderButtons>
        <div className="Folder-Buttons">
          <StyledButton>전체</StyledButton>
          <StyledButton>⭐️ 즐겨찾기</StyledButton>
          <StyledButton>코딩 팁</StyledButton>
          <StyledButton>채용 사이트</StyledButton>
          <StyledButton>유용한 글</StyledButton>
          <StyledButton>나만의 장소</StyledButton>
        </div>
        <LinkAdderButton />
      </StyledFolderButtons>
      <ActionButtons />
    </>
  );
}
