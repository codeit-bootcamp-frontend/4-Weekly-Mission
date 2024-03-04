import * as S from "./Modal.style";
import WideButton from "../wide-button/WideButton";

const Modal = ({ isOpen, modalType }) => {
  const modalFormat = options[modalType];

  if (!isOpen) {
    return null;
  } else {
    return (
      <S.Container>
        <p className="title">{modalType}</p>
        <S.Input type="text" />
        <WideButton options={modalFormat} />
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
