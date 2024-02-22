import AddLinkInput from "./AddLinkInput";
import AddLinkContainer from "./AddLinkContainer";
import AddLinkButton from "./AddLinkButton";
import InputContainer from "./InputContainer";

function AddLink() {
  return (
    <>
      <AddLinkContainer>
        <InputContainer>
          <AddLinkInput type="text" placeholder="링크를 추가해 보세요" />
          <AddLinkButton>추가하기</AddLinkButton>
        </InputContainer>
      </AddLinkContainer>
    </>
  );
}
export default AddLink;
