import * as S from "./Modal.style";
import WideButton from "../wide-button/WideButton";
import { useContext } from "react";
import { ModalContext } from "../../pages/test";

const Modal = ({ modalType }) => {
  const modalFormat = options[modalType];
  const { isOpen, setIsOpen } = useContext(ModalContext);

  if (!isOpen) {
    return null;
  } else {
    return (
      <S.Container>
        <div className="content">
          <p className="title">{modalType}</p>
          <S.Input type="text" />
          <WideButton options={modalFormat} />
        </div>
        <img
          onClick={() => setIsOpen(false)}
          className="close"
          src="/assets/folder/close.svg"
          alt="닫기"
        />
      </S.Container>
    );
  }
};

export default Modal;

const options = {
  "폴더 이름 변경": {
    input: true,
    btnType: "primary",
    btnText: "변경하기",
  },
  "폴더 추가": {
    input: true,
    btnType: "primary",
    btnText: "추가하기",
  },
  "폴더 삭제": {
    input: false,
    btnType: "warning",
    btnText: "삭제하기",
  },
  "링크 삭제": {
    input: false,
    btnType: "warning",
    btnText: "삭제하기",
  },
  "폴더에 추가": {
    // input: false,
    btnType: "primary",
    btnText: "추가하기",
  },
  "폴더 공유": {
    input: false,
    // btnType: "warning",
    // btnText: "삭제하기",
  },
};
