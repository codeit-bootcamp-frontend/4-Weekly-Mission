import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

function ModalAddFolder() {
  return (
    <>
      <Title>폴더 추가</Title>
      <Input placeholder="내용 입력" />
      <Button $btnColor="blue">추가하기</Button>
    </>
  );
}

export default ModalAddFolder;
