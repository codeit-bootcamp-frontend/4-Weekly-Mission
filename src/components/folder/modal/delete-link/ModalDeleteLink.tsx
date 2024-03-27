import Title from "../Title";
import Button from "../Button";
import FolderText from "../share/FolderText";

function ModalDeleteLink({ linkUrl }: { linkUrl: string }) {
  return (
    <>
      <Title>링크 삭제</Title>
      <FolderText>{linkUrl}</FolderText>
      <Button $btnColor="red">삭제하기</Button>
    </>
  );
}

export default ModalDeleteLink;
