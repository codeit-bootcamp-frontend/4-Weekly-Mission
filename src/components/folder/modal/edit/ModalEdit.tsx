import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

function ModalEdit({ folderName }: { folderName: string }) {
  return (
    <>
      <Title>폴더 이름 변경</Title>
      <Input placeholder={folderName} />
      <Button $btnColor="blue">변경하기</Button>
    </>
  );
}

export default ModalEdit;
