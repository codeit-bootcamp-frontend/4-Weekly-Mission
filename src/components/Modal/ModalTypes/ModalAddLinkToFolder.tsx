import { useState } from "react";
import * as S from "../ModalLoader.style";

export default function ModalAddLinkToFolder({ modalData }: any) {
  const [targetLink, [favor, ...folderList]] = [...modalData];
  const [SelectedFolder, setSelectedFolder] = useState("");

  const handleSelectFolder = (key: any) => {
    setSelectedFolder(key);
  };

  return (
    <>
      <S.ModalTitle>
        폴더에 추가 <br />
        <S.ModalCaption>{targetLink}</S.ModalCaption>
      </S.ModalTitle>
      <S.ShareButtonLayout>
        {folderList.map((item: any) => (
          <S.Button
            onClick={() => handleSelectFolder(item.name)}
            $state={item.name === SelectedFolder}
            className="modal-sub-folder-btn-list"
            key={item.name}
          >
            <h2>
              {item.name}
              <span>{`${item.length || 0}개 링크`}</span>
            </h2>
            {item.name === SelectedFolder && (
              <img src="check.svg" alt="CheckedFolder" />
            )}
          </S.Button>
        ))}
      </S.ShareButtonLayout>
      <S.ModalButton>추가하기</S.ModalButton>
    </>
  );
}
