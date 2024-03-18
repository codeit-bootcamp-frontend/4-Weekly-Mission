import { FormEvent, useRef } from "react";
import * as S from "./FolderLinkAddBar.style";

type HandleLinkAddType = (e: FormEvent) => void;

export default function FolderLinkAddBar({ handleSubmit, subFolderList }: any) {
  const addLinkInputRef = useRef("");

  const handleLinkAdd: HandleLinkAddType = (e) => {
    e.preventDefault();
    handleSubmit("addLinkToFolder", [addLinkInputRef || "", subFolderList]);
  };

  return (
    <S.FolderLinkAddBarWrapper>
      <S.Form onSubmit={(e) => handleLinkAdd(e)}>
        <S.Label htmlFor="add-link" />
        <S.Input id="add-link" placeholder="링크를 추가해 보세요." />
        <S.Button>추가하기</S.Button>
      </S.Form>
    </S.FolderLinkAddBarWrapper>
  );
}
