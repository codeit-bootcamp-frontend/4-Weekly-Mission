import { FormEvent, useRef } from "react";
import * as S from "./FolderLinkAddBar.style";

// Type
import { ModalDataAddLinkToSubFolder } from "src/@types/ModalFunctionDataTypes";
interface FolderLinkAddBarPropType extends ModalDataAddLinkToSubFolder {
  isHidden: boolean;
}

type HandleLinkAddType = (e: FormEvent) => void;

/**
 *
 * @param { Function } handleSubmit 현재 입력된 링크를 받아 모달에 전달할 데이터를 생성하는 함수입니다.
 * @param {SubFolderListData} subFolderList 현재 있는 폴더 리스트를 받아 표시해주는 리스트입니다.
 * @returns form으로 입력을 받은 링크 데이터로 모달을 띄워 선택한 리스트에 추가하는 기능을 가질 컴포넌트입니다.
 */
export default function FolderLinkAddBar({
  handleSubmit,
  subFolderList,
  isHidden = false,
}: FolderLinkAddBarPropType) {
  const addLinkInputRef = useRef<HTMLInputElement>(null);

  const handleLinkAdd: HandleLinkAddType = (e) => {
    e.preventDefault();
    if (addLinkInputRef.current!.value === "") return;
    handleSubmit("addLinkToFolder", [
      addLinkInputRef.current!.value,
      subFolderList,
    ]);
  };

  return (
    <S.FolderLinkAddBarWrapper $isHidden={isHidden}>
      <S.Form onSubmit={(e) => handleLinkAdd(e)}>
        <S.Label htmlFor="add-link" />
        <S.Input
          id="add-link"
          placeholder="링크를 추가해 보세요."
          ref={addLinkInputRef}
        />
        <S.Button>추가하기</S.Button>
      </S.Form>
    </S.FolderLinkAddBarWrapper>
  );
}
