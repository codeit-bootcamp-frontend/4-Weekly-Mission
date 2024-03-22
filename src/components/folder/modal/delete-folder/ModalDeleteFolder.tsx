import Title from "../Title";
import Button from "../Button";

function ModalDeleteFolder({ folderName }: { folderName: string }) {
  return (
    <>
      <Title>폴더 삭제</Title>
      <Button $btnColor="red">삭제하기</Button>
    </>
  );
}

export default ModalDeleteFolder;
