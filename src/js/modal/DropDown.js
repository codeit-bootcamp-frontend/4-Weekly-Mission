import React, { useState } from "react";
import "../../css/DropDown.css";
import DeleteLink from "./DeleteLink";

function DropDown({
  selectedLinks,
  setSelectedLinks,
  selectedLinkId,
  setSelectedFolderId,
}) {
  const [deleteLinkModalOpen, setDeleteLinkModalOpen] = useState(false);

  const openDeleteLinkModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteLinkModalOpen(true);
  };
  return (
    <>
      <div className="DropDownMenu">
        <li className="DropDownList" onClick={openDeleteLinkModal}>
          삭제하기
          {deleteLinkModalOpen && (
            <DeleteLink
              selectedLinks={selectedLinks} // 전달되어야 하는 링크 목록
              selectedLinkId={selectedLinkId} // 삭제할 링크의 ID
              setDeleteLinkModalOpen={setDeleteLinkModalOpen} // 모달 상태 업데이트 함수
              setSelectedLinks={setSelectedLinks} // setSelectedLinks 함수 전달
              setSelectedFolderId={setSelectedFolderId} // 폴더 ID 업데이트 함수
            />
          )}
        </li>
        <li
          className="DropDownList"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          폴더에 추가
        </li>
      </div>
    </>
  );
}

export default DropDown;
