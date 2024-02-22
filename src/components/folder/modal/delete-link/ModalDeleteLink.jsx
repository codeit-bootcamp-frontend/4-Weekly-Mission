import StyledBackground from "../StyledBackground";
import StyledContainer from "../StyledContainer";
import StyledDiv from "../StyledDiv";
import CloseButton from "../CloseButton";
import Title from "../Title";
import Button from "../Button";
import FolderText from "../share/FolderText";

function ModalDeleteLink({ isDeleteLink, setIsDeleteLink, linkUrl }) {
  const handleClose = () => setIsDeleteLink(!isDeleteLink);
  return (
    <>
      {isDeleteLink && (
        <StyledBackground onClick={() => handleClose()}>
          <StyledContainer onClick={(e) => e.stopPropagation()}>
            <StyledDiv>
              <CloseButton onClick={() => handleClose()} />
              <Title>링크 삭제</Title>
              <FolderText>{linkUrl}</FolderText>
              <Button btnColor="red">삭제하기</Button>
            </StyledDiv>
          </StyledContainer>
        </StyledBackground>
      )}
    </>
  );
}

export default ModalDeleteLink;
