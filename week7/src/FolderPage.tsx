import { useEffect, useState } from "react";
import "./App.css";
import FolderHeader from "./components/FolderPage/FolderHeader";
import Input from "./components/Input";
import FolderCard from "./components/FolderPage/FolderCard";
import Footer from "./components/Footer";
import {
  useFolderUserFetch,
  useFolderCardDataFetch,
  useSortedMenusDataFetch,
  useAllMenuDataFetch,
} from "./hooks/useFetch";
import SortedMenus from "./components/FolderPage/SortedMenus";
import { useMediaQuery } from "react-responsive";
import shareImg from "./assets/share.png";
import deleteImg from "./assets/delete.png";
import penImg from "./assets/pen.png";
import Modal from "./components/Modal/Modal";

export const ALL_MENU_URL = "https://bootcamp-api.codeit.kr/api/users/4/links";
export type LinkAddModal = {
  linkModal: boolean;
  folderAddModal: boolean;
  shareAddModal?: boolean;
  editAddModal?: boolean;
  deleteAddModal?: boolean;
  linkDeleteModal?: boolean;
  dataUrl?: string;
};
function FolderPage() {
  const isTablet = useMediaQuery({ maxWidth: 1124 });
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  const [folderName, setFolderName] = useState("");
  const [menusId, setAllMenuId] = useState<number | undefined>(undefined);
  console.log(menusId);
  const [subUrl, setSubUrl] = useState(``);

  const [addModal, setAddModal] = useState<LinkAddModal>({
    linkModal: false,
    folderAddModal: false,
    shareAddModal: false,
    editAddModal: false,
    deleteAddModal: false,
    linkDeleteModal: false,
    dataUrl: "",
  });
  const [linkInput, setLinkInput] = useState<string>("");

  const userUrl = "https://bootcamp-api.codeit.kr/api/users/1";

  const SortedAllMenusUrl =
    "https://bootcamp-api.codeit.kr/api/users/4/folders";

  const { data: userData } = useFolderUserFetch(userUrl);
  const { data: sortedAllMenus } = useSortedMenusDataFetch(SortedAllMenusUrl);
  const { data: folderData } = useFolderCardDataFetch(subUrl);
  const { data: allMenuData } = useAllMenuDataFetch(ALL_MENU_URL);

  console.log(userData); //로그인 부분
  console.log(sortedAllMenus); //'전체' 메뉴 제외한 메뉴들
  console.log(folderData); // '전체' 메뉴 제외한 메뉴들 데이터
  console.log(allMenuData); // '전체' 메뉴 데이터

  const handleGetFolderId = (id: number | undefined) => {
    setAllMenuId(id);
  };

  const handleChangeUrl = (url: string) => {
    setSubUrl(url);
  };

  const handlePrintFolderName = (name: string) => {
    setFolderName(name);
  };
  const isShowModal = (linkAddModal: LinkAddModal) => {
    setAddModal(linkAddModal);
  };

  const isShareModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    isShowModal({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: true,
    });
  };

  const isEditModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    isShowModal({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: true,
    });
  };

  const isDeleteModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    isShowModal({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: true,
    });
  };

  const handleChangeInput = (data: string) => {
    setLinkInput(data);
  };

  useEffect(() => {}, [subUrl, folderData, sortedAllMenus, allMenuData]);

  return (
    <div className="App">
      <div
        className={
          Object.values(addModal).some((value) => value === true)
            ? "background-container"
            : ""
        }
      ></div>
      <div className="page-container">
        <FolderHeader
          user={userData}
          imageSource={userData?.data[0]?.image_source}
          email={userData?.data[0]?.email}
          isShowModal={isShowModal}
        />
        {addModal.linkModal ? (
          <Modal
            title="폴더에 추가"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            linkAddModal={addModal.linkModal}
          />
        ) : null}
        {addModal.folderAddModal ? (
          <Modal
            title="폴더 추가"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            folderAddModal={addModal.folderAddModal}
          />
        ) : null}
        {addModal.shareAddModal ? (
          <Modal
            title="폴더 공유"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            shareModal={addModal.shareAddModal}
            menusId={menusId}
          />
        ) : null}
        {addModal.editAddModal ? (
          <Modal
            title="폴더 이름 변경"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            editModal={addModal.editAddModal}
          />
        ) : null}

        {addModal.deleteAddModal ? (
          <Modal
            title="폴더 삭제"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            deleteModal={addModal.deleteAddModal}
          />
        ) : null}
        {addModal.linkDeleteModal ? (
          <Modal
            title="링크 삭제"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            linkDeleteModal={addModal.linkDeleteModal}
            dataUrl={addModal.dataUrl}
          />
        ) : null}

        <Input linkInput={linkInput} handleChangeInput={handleChangeInput} />
        <SortedMenus
          menusData={sortedAllMenus?.data}
          onClickSubMenu={handleGetFolderId}
          allMenuData={allMenuData?.data}
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
              <img src={shareImg} alt="공유 버튼" />
              공유
            </a>
            <a href="/" onClick={isEditModal}>
              <img src={penImg} alt="이름 변경 버튼" />
              이름 변경
            </a>
            <a href="/" onClick={isDeleteModal}>
              <img src={deleteImg} alt="삭제 버튼" />
              삭제
            </a>
          </div>
        </div>
        <FolderCard
          data={folderData?.data}
          isShowModal={isShowModal}
          allMenuData={allMenuData?.data}
          linkInput={linkInput}
        />
        <Footer />
      </div>
    </div>
  );
}

export default FolderPage;
