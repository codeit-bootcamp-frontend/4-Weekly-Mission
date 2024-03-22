import { useState } from "react";
import * as S from "../ModalLoader.style";
import * as SS from "./ModalAddLinkToSubFolder.style";

// Type
import FolderListDataType from "src/@types/FolderListDataType";

interface ModalAddLinkToSubFolderPropType {
  modalData: [string, FolderListDataType[]];
}

/**
 *
 * @param {[string, folderListType]} modalData 현재 선택된 링크와 폴더 리스트
 * @returns 현재 선택된 링크와 폴더 리스트를 데이터로 받아 선택한 폴더에 추가하는 기능을 가질 모달입니다.
 */
export default function ModalAddLinkToSubFolder({
  modalData,
}: ModalAddLinkToSubFolderPropType) {
  const [targetLink, [...folderList]] = [...modalData];
  const [SelectedFolder, setSelectedFolder] = useState("");

  const handleSelectFolder = (key: string) => {
    setSelectedFolder(key);
  };

  return (
    <>
      <S.ModalTitle>
        폴더에 추가 <br />
        <S.ModalCaption>{targetLink}</S.ModalCaption>
      </S.ModalTitle>
      <S.ShareButtonLayout>
        {folderList
          .filter((item) => item.favorite !== true)
          .map((item) => (
            <SS.SubFolderDesireToAddLinkButton
              onClick={() => handleSelectFolder(item.name)}
              $state={item.name === SelectedFolder}
              key={item.name}
            >
              <h2 className="lb-body1-regular">
                {item.name}
                <span className="lb-body2-regular">{`${
                  item.link.count || 0
                }개 링크`}</span>
              </h2>
              {item.name === SelectedFolder && (
                <img src="check.svg" alt="CheckedFolder" />
              )}
            </SS.SubFolderDesireToAddLinkButton>
          ))}
      </S.ShareButtonLayout>
      <S.ModalButton>추가하기</S.ModalButton>
    </>
  );
}
