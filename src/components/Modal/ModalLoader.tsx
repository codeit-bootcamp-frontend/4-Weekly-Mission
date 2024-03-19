import * as S from "./ModalLoader.style";

// Components
import ModalChangeSubFolderName from "./ModalChangeSubFolderName/ModalChageSubFolderName";
import ModalAddSubFolder from "./ModalAddSubFolder/ModalAddSubFolder";
import ModalShareSubFolder from "./ModalShareSubFolder/ModalShareSubFolder";
import ModalRemoveSubFolder from "./ModalRemoveSubFolder/ModalRemoveSubFolder";
import ModalRemoveLink from "./ModalRemoveLink/ModalRemoveLink";
import ModalAddLinkToFolder from "./ModalAddLinkToSubFolder/ModalAddLinkToSubFolder";

interface ModalLoaderPropType {
  modalType: string;
  modalFunc: any;
  modalData: any;
  isOpened: boolean;
  setIsOpened: (state: boolean) => void;
}

/**
 * @description 모달의 유형을 받아 표시할 모달을 선택하고, 각 모달에 필요한 정보를 전달하는 컴포넌트입니다.
 * @param modalType
 * @param modalFunc
 * @param modalData
 * @param isOpened setState함수를 통해
 * @param setIsOpened isOpened의 set함수로, 이 모달의 온/오프를 제어해야 하는 함수에 들어갈 함수입니다.
 * @returns
 */
const ModalLoader = ({
  modalType = "UNKNOWN_TYPE",
  modalFunc,
  modalData,
  isOpened,
  setIsOpened,
}: ModalLoaderPropType) => {
  const renderModal = () => {
    switch (modalType) {
      case "nameChange":
        return <ModalChangeSubFolderName />;

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
          <S.ModalCloseButton type="button" onClick={() => setIsOpened(false)}>
            <img src="modalClose.png" alt="closeModal" />
          </S.ModalCloseButton>

          {renderModal()}
        </S.ModalWrapper>
        ;
      </S.ModalBackground>
    );
};

export default ModalLoader;
