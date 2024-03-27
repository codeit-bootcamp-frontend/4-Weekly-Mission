import * as S from "./ModalFolderStyled";

interface ModalBase {
  folderList: number;
  title: string;
}

export const ModalFolderList = ({ folderList, title }: ModalBase) => {
  return (
    <S.TitleContainer>
      <S.SubTitle>{title}</S.SubTitle>
      <S.FolderCount>{folderList}개 링크</S.FolderCount>
      <S.SelectFolderIcon />
    </S.TitleContainer>
  );
};
