import * as S from "./ModalLoader.style";

import ModalSubFolderNameChange from "./ModalChangeSubFolderName/ModalChageSubFolderName";
import ModalAddSubFolder from "./ModalAddSubFolder/ModalAddSubFolder";
import ModalShareSubFolder from "./ModalShareSubFolder/ModalShareSubFolder";
import ModalRemoveLink from "./ModalRemoveLink/ModalRemoveLink";
import ModalRemoveSubFolder from "./ModalRemoveSubFolder/ModalRemoveSubFolder";
import ModalAddLinkToFolder from "./ModalAddLinkToSubFolder/ModalAddLinkToSubFolder";

const ModalLoader = ({
  modalType = "UNKNOWN_TYPE",
  modalFunc = false,
  modalData = false,
  isOpened,
  isOpenedToggle,
}: any) => {
  const renderModal = () => {
    switch (modalType) {
      case "nameChange":
        return <ModalSubFolderNameChange />;

      case "addSubFolder":
        return <ModalAddSubFolder />;

      case "shareFolder":
        return <ModalShareSubFolder modalData={modalData} />;

      case "removeFolder":
        return <ModalRemoveSubFolder modalData={modalData} />;

      case "removeLink":
        return <ModalRemoveLink modalData={modalData} />;

      case "addLinkToFolder":
        return <ModalAddLinkToFolder modalData={modalData} />;

      default:
        throw new Error("검증되지 않은 Modal");
    }
  };

  if (isOpened)
    return (
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalCloseButton type="button" onClick={isOpenedToggle}>
            <img src="modalClose.png" alt="closeModal" />
          </S.ModalCloseButton>

          {renderModal()}
        </S.ModalWrapper>
        ;
      </S.ModalBackground>
    );
};

export default ModalLoader;
