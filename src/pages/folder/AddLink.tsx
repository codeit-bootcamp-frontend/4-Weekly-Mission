import "./AddLink.css";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { contentsLink } from "../../store/store";
import { ChangeEvent, useRef } from "react";
import { ModalProps } from "./type";

const AddLinkInput = styled.input`
  width: 100%;
  height: 69px;
  padding: 16px 120px 16px 52px;
  border-radius: 15px;
  outline: none;
  border: 1px solid #6d6afe;
  font-size: 1.6rem;
  &::placeholder {
    color: #9fa6b2;
    font-family: Pretendard;
  }
  @media screen and (max-width: 768px) {
    height: 53px;
    padding: 8px 100px 8px 34px;
    font-size: 1.4rem;
  }
`;

function AddLink({
  setName,
  setOpenModal,
  setButtonColor,
  setButtonName,
  modalName,
}: ModalProps) {
  const refValue = useRef<HTMLInputElement>(null);
  const setLink = useSetRecoilState(contentsLink);
  const handleAdd = () => {
    setOpenModal(true);
    setName(modalName.folderAdd.name);
    setButtonColor(modalName.folderAdd.buttonColor);
    setButtonName(modalName.folderAdd.buttonName);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };
  return (
    <article>
      <form className="addLinkForm">
        <label htmlFor="addLink">
          <img
            src={`${process.env.PUBLIC_URL}/images/link.svg`}
            alt="링크추가"
          />
        </label>
        <AddLinkInput
          ref={refValue}
          onChange={handleChange}
          id="addLink"
          type="text"
          placeholder="링크를 추가해 보세요."
        />
        <button onClick={handleAdd} type="button">
          추가하기
        </button>
      </form>
    </article>
  );
}

export default AddLink;
