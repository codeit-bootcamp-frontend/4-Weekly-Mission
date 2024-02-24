import AddLinkInput from "./AddLinkInput";
import AddLinkContainer from "./AddLinkContainer";
import AddLinkButton from "./AddLinkButton";
import InputContainer from "./InputContainer";
import { useState } from "react";
import ModalAdd from "../modal/add/ModalAdd";

function AddLink() {
  const [isAdd, setIsAdd] = useState(false);
  const handleAddModalClick = () => setIsAdd(!isAdd);
  return (
    <>
      <AddLinkContainer>
        <InputContainer>
          <AddLinkInput type="text" placeholder="링크를 추가해 보세요" />
          <AddLinkButton onClick={handleAddModalClick}>추가하기</AddLinkButton>
        </InputContainer>
        <ModalAdd isAdd={isAdd} setIsAdd={setIsAdd} />
      </AddLinkContainer>
    </>
  );
}
export default AddLink;
