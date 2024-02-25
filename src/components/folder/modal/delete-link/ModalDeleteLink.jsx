import StyledBackground from "../StyledBackground";
import StyledContainer from "../StyledContainer";
import StyledDiv from "../StyledDiv";
import CloseButton from "../CloseButton";
import Title from "../Title";
import Button from "../Button";
import FolderText from "../share/FolderText";
import stopPropagation from "../../../util/stopPropagation";

function ModalDeleteLink({ handleDeleteLinkModal, linkUrl }) {
  return (
    <StyledBackground onClick={handleDeleteLinkModal}>
      <StyledContainer onClick={stopPropagation}>
        <StyledDiv>
          <CloseButton onClick={handleDeleteLinkModal} />
          <Title>링크 삭제</Title>
          <FolderText>{linkUrl}</FolderText>
          <Button btnColor="red">삭제하기</Button>
        </StyledDiv>
      </StyledContainer>
    </StyledBackground>
  );
}

export default ModalDeleteLink;
