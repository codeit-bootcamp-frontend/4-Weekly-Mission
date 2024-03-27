import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { contentsLink } from "../../store/store";
import { ModalItem, ModalProps } from "./type";

const KebabModalBox = styled.ul`
  z-index: 2;
  position: absolute;
  bottom: 40px;
  right: -59px;
  width: 100px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

  li:last-of-type button {
    background: rgba(231, 239, 251, 1);
    color: rgba(109, 106, 254, 1);
  }

  button {
    cursor: pointer;
    width: 100%;
    background: #fff;
    border: none;
    padding: 7px 0px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    bottom: 35px;
    right: 19.5px;
  }
`;

function KebabModal({
  url,
  setName,
  setOpenModal,
  setButtonColor,
  setButtonName,
  modalName,
}: ModalProps & { url: string }) {
  const setContentsLink = useSetRecoilState(contentsLink);
  function handleModalClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: ModalItem
  ) {
    event.preventDefault();
    setOpenModal(true);
    setName(type.name);
    setButtonColor(type.buttonColor);
    setButtonName(type.buttonName);
    setContentsLink(url);
  }
  return (
    <KebabModalBox>
      <li>
        <button
          onClick={(event) => handleModalClick(event, modalName["linkDelete"])}
        >
          삭제하기
        </button>
      </li>
      <li>
        <button
          onClick={(event) => handleModalClick(event, modalName["folderAdd"])}
        >
          폴더에 추가
        </button>
      </li>
    </KebabModalBox>
  );
}

export default KebabModal;
