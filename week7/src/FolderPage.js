import { useEffect, useState } from "react";
import "./App.css";
import FolderHeader from "./components/FolderPage/FolderHeader.js";
import Input from "./components/Input.js";
import FolderCard from "./components/FolderPage/FolderCard.js";
import Footer from "./components/Footer.js";
import useFetch from "../src/hooks/useFetch.js";
import SortedMenus from "./components/FolderPage/SortedMenus.js";
import { useMediaQuery } from "react-responsive";
import shareImg from "./assets/share.png";
import deleteImg from "./assets/delete.png";
import penImg from "./assets/pen.png";
import Modal from "./components/Modal/Modal.js";
export const ALL_MENU_URL = "https://bootcamp-api.codeit.kr/api/users/1/links";

function FolderPage() {
  const isTablet = useMediaQuery({ maxWidth: 1124 });
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  const [folderName, setFolderName] = useState("");
  const [allMenuId, setAllMenuId] = useState(null);

  const [subUrl, setSubUrl] = useState(``);

  const [addModal, setAddModal] = useState({
    linkModal: false,
    folderAddModal: false,
    shareAddModal: false,
    editAddModal: false,
    deleteAddModal: false,
    linkDeleteModal: false,
    dataUrl: "",
  });

  const userUrl = "https://bootcamp-api.codeit.kr/api/users/1";

  const SortedAllMenusUrl =
    "https://bootcamp-api.codeit.kr/api/users/1/folders";

  const { data: userData } = useFetch(userUrl);
  const { data: sortedAllMenusData } = useFetch(SortedAllMenusUrl);
  const { data: folderData } = useFetch(subUrl);

  const { data: AllMenuData } = useFetch(ALL_MENU_URL);
  const handleGetFolderId = (id) => {
    setAllMenuId(id);
  };

  const handleChangeUrl = (url) => {
    setSubUrl(url);
    return;
  };

  const handlePrintFolderName = (name) => {
    setFolderName(name);
  };
  const isShowModal = (linkAddModal) => {
    setAddModal(linkAddModal);
  };

  const isShareModal = (e) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: true,
    }));
  };

  const isEditModal = (e) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: true,
    }));
  };

  const isDeleteModal = (e) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: true,
    }));
  };

  // const isLinkDeleteModal = (e) => {
  //   e.preventDefault();
  //   isShowModal((prev) => ({
  //     linkModal: false,
  //     folderAddModal: false,
  //     shareAddModal: false,
  //     editAddModal: false,
  //     deleteAddModal: false,
  //     linkDeleteModal: true,
  //   }));
  // };
  useEffect(() => {}, [subUrl, folderData, sortedAllMenusData]);

  return (
    <div className="App">
      <div
        className={
          Object.values(addModal).some((value) => value === true)
            ? "background-container"
            : null
        }
      ></div>
      <div className="page-container">
        <FolderHeader
          user={userData}
          imageSource={userData?.data[0]?.image_source}
          email={userData?.data[0]?.email}
          onClick={isShowModal}
        />
        {addModal.linkModal ? (
          <Modal
            title="폴더에 추가"
            folderData={folderData?.data}
            folderMenus={sortedAllMenusData?.data}
            isShowModal={isShowModal}
            linkAddModal={addModal.linkModal}
          />
        ) : null}
        {addModal.folderAddModal ? (
          <Modal
            title="폴더 추가"
            folderData={folderData?.data}
            folderMenus={sortedAllMenusData?.data}
            isShowModal={isShowModal}
            folderAddModal={addModal.folderAddModal}
          />
        ) : null}
        {addModal.shareAddModal ? (
          <Modal
            title="폴더 공유"
            folderData={folderData?.data}
            folderMenus={sortedAllMenusData?.data}
            isShowModal={isShowModal}
            shareModal={addModal.shareAddModal}
            menusId={allMenuId}
          />
        ) : null}
        {addModal.editAddModal ? (
          <Modal
            title="폴더 이름 변경"
            folderData={folderData?.data}
            folderMenus={sortedAllMenusData?.data}
            isShowModal={isShowModal}
            editModal={addModal.editAddModal}
          />
        ) : null}

        {addModal.deleteAddModal ? (
          <Modal
            title="폴더 삭제"
            folderData={folderData?.data}
            folderMenus={sortedAllMenusData?.data}
            isShowModal={isShowModal}
            deleteModal={addModal.deleteAddModal}
          />
        ) : null}
        {addModal.linkDeleteModal ? (
          <Modal
            title="링크 삭제"
            folderData={folderData?.data}
            folderMenus={sortedAllMenusData?.data}
            isShowModal={isShowModal}
            linkDeleteModal={addModal.linkDeleteModal}
            dataUrl={addModal.dataUrl}
          />
        ) : null}
        <Input />
        <SortedMenus
          menusData={sortedAllMenusData?.data}
          onClickSubMenu={handleGetFolderId}
          allMenuData={AllMenuData?.data}
          onChangeUrl={handleChangeUrl}
          onChangeTitle={handlePrintFolderName}
          isShowModal={isShowModal}
        />

        <div
          className={isTablet ? "titleAndToolBar-tablet" : "titleAndToolBar"}
        >
          <h2 className={isTablet ? "title-tablet" : "title"}>{folderName}</h2>
          <div className={isTablet ? "tool-tablet" : "tool"}>
            <a href="/" onClick={isShareModal}>
              <img src={shareImg} />
              공유
            </a>
            <a href="/" onClick={isEditModal}>
              <img src={penImg} />
              이름 변경
            </a>
            <a href="/" onClick={isDeleteModal}>
              <img src={deleteImg} />
              삭제
            </a>
          </div>
        </div>
        <FolderCard
          data={folderData?.data}
          allMenuId={allMenuId}
          isShowModal={isShowModal}
        />
        <Footer />
      </div>
    </div>
  );
}

export default FolderPage;
