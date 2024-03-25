import React, { useState } from "react";
import Nav from "../components/Common/Nav";
import Footer from "../components/Common/Footer";
import AddFolder from "../components/Modal/AddFolder";
import ChangeName from "../components/Modal/ChangeName";
import DeleteFolder from "../components/Modal/DeleteFolder";
import AddToFolder from "../components/Modal/AddToFolder";
import ShareLink from "../components/Modal/ShareLink";

const Main = () => {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState(false);
  const [isChangeNameModalOpen, setIsChangeNameModalOpen] = useState(false);
  const [isDeleteFolderModalOpen, setIsDeleteFolderModalOpen] = useState(false);
  const [isAddToFolderModalOpen, setIsAddToFolderModalOpen] = useState(false);
  const [isShareLinkModalOpen, setIsShareLinkModalOpen] = useState(false);

  const toggleAddFolderModal = () => {
    setIsAddFolderModalOpen(!isAddFolderModalOpen);
  };

  const toggleChangeNameModal = () => {
    setIsChangeNameModalOpen(!isChangeNameModalOpen);
  };

  const toggleDeleteFolderModal = () => {
    setIsDeleteFolderModalOpen(!isDeleteFolderModalOpen);
  };

  const toggleAddToFolderModal = () => {
    // AddToFolder 모달 열기 상태를 토글하는 함수 추가
    setIsAddToFolderModalOpen(!isAddToFolderModalOpen);
  };

  const toggleShareLinkModal = () => {
    setIsShareLinkModalOpen(!isShareLinkModalOpen);
  };

  // 임의의 카테고리 데이터
  const categoryList = [
    {
      id: 14,
      name: "⭐️ 즐겨찾기",
      link: { count: 0 },
    },
    {
      id: 24,
      name: "신규 폴더1",
      link: { count: 0 },
    },
    {
      id: 307,
      name: "새로운폴더스",
      link: { count: 0 },
    },
    {
      id: 308,
      name: "새로운폴더스",
      link: { count: 0 },
    },
    {
      id: 309,
      name: "새로운폴더스",
      link: { count: 0 },
    },
    {
      id: 320,
      name: "새로운폴더스",
      link: { count: 0 },
    },
    // 나머지 카테고리 데이터 추가
  ];

  return (
    <>
      <Nav sticky={true} />
      <main>
        메인
        <div>
          <button onClick={toggleAddFolderModal}>폴더 추가</button>
          <AddFolder
            isOpen={isAddFolderModalOpen}
            onClose={toggleAddFolderModal}
          />
          <button onClick={toggleChangeNameModal}>이름 변경</button>
          <ChangeName
            isOpen={isChangeNameModalOpen}
            onClose={toggleChangeNameModal}
          />
          <button onClick={toggleDeleteFolderModal}>폴더 삭제</button>
          <DeleteFolder
            isOpen={isDeleteFolderModalOpen}
            onClose={toggleDeleteFolderModal}
            selectedName="삭제할 폴더명"
          />
          <button onClick={toggleAddToFolderModal}>폴더에 추가</button>
          <AddToFolder
            isOpen={isAddToFolderModalOpen}
            onClose={toggleAddToFolderModal}
            categoryList={categoryList}
            link="example link"
          />
          <button onClick={toggleShareLinkModal}>폴더에 추가</button>
          <ShareLink
            isOpen={isShareLinkModalOpen}
            onClose={toggleShareLinkModal}
            selectedName="공유할 폴더명"
            folderId="120"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Main;
