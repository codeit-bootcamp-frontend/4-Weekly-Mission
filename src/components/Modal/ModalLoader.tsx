import * as S from "./ModalLoader.style";

// Components
import ModalChangeSubFolderName from "./ModalChangeSubFolderName/ModalChangeSubFolderName";
import ModalAddSubFolder from "./ModalAddSubFolder/ModalAddSubFolder";
import ModalShareSubFolder from "./ModalShareSubFolder/ModalShareSubFolder";
import ModalRemoveSubFolder from "./ModalRemoveSubFolder/ModalRemoveSubFolder";
import ModalRemoveLink from "./ModalRemoveLink/ModalRemoveLink";
import ModalAddLinkToSubFolder from "./ModalAddLinkToSubFolder/ModalAddLinkToSubFolder";

// Types
import {
  ModalDataAddLinkToSubFolder,
  ModalDataRemoveLink,
  ModalDataRemoveSubFolder,
  ModalDataShareSubFolder,
} from "src/@types/ModalFunctionDataTypes";

interface ModalLoaderPropType {
  modalType: string;
  modalFunc?: any;
  modalData: any;
  setIsOpened: () => void;
}

/**
 * @description 모달의 유형을 받아 표시할 모달을 선택하고, 각 모달에 필요한 정보를 전달하는 컴포넌트입니다.
 * @param modalType 모달이 호출되었을 때, 불러올 모달의 타입을 명시하는 파라미터입니다.
 * @param modalFunc 모달에 내장된 버튼을 눌렀을 때, 실행하고자 하는 함수입니다.
 * @param modalData 모달에 정보를 표시해야 하는 데이터를 담고있는 파라미터입니다.
 * @param setIsOpened isOpened의 set함수로, 이 모달의 온/오프를 제어해야 하는 함수에 들어갈 함수입니다.
 * @returns
 */
const ModalLoader = ({
  modalType = "UNKNOWN_TYPE",
  modalFunc,
  modalData,
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
        return <ModalAddLinkToSubFolder modalData={modalData} />;

      default:
        throw new Error("검증되지 않은 Modal");
    }
  };

  return (
    <S.ModalBackground>
      <S.ModalWrapper>
        <S.ModalCloseButton type="button" onClick={() => setIsOpened()}>
          <img src="modalClose.png" alt="closeModal" />
        </S.ModalCloseButton>
        {renderModal()}
      </S.ModalWrapper>
      ;
    </S.ModalBackground>
  );
};

export default ModalLoader;
