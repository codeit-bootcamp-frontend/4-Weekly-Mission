import StyledBackground from "../StyledBackground";
import StyledContainer from "../StyledContainer";
import StyledDiv from "../StyledDiv";
import CloseButton from "../CloseButton";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";
import stopPropagation from "../../../util/stopPropagation";

function ModalEdit({ handleEditFolderModal, folderName }) {
  return (
    <StyledBackground onClick={handleEditFolderModal}>
      <StyledContainer onClick={stopPropagation}>
        <StyledDiv>
          <CloseButton onClick={handleEditFolderModal} />
          <Title>폴더 이름 변경</Title>
          <Input placeholder={folderName} />
          <Button>변경하기</Button>
        </StyledDiv>
      </StyledContainer>
    </StyledBackground>
  );
}

export default ModalEdit;
