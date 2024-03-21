import { FormEvent, useRef } from "react";
import * as S from "./FolderLinkAddBar.style";

// Type
import { ModalFunctionAddLinkToSubFolder } from "src/@types/ModalFunctionDataTypes";

type HandleLinkAddType = (e: FormEvent) => void;

export default function FolderLinkAddBar({
  handleSubmit,
  subFolderList,
}: ModalFunctionAddLinkToSubFolder) {
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
    <S.FolderLinkAddBarWrapper $isHidden={false}>
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
