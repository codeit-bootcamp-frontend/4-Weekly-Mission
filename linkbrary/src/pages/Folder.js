import "../global.css";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getAPI } from "../APIUtil";
import Header from "../components/NavBottom/Header";
import Footer from "../components/NavBottom/Footer";
import Search from "../components/Search";
import AddLink from "../components/AddLink";
import Category from "../components/Category";
import FolderFunction from "../components/FolderFunction";
import Contents from "../components/Contents";
import useGetJson from "../functions/useGetJson";
import Modal from "../modals/Modal";

function Folder() {
  const [title, setTitle] = useState("전체");
  const [listId, setListId] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [allMenuId, setAllMenuId] = useState(null);
  const [addModal, setAddModal] = useState({
    linkModal: false,
    folderAddModal: false,
    shareAddModal: false,
    editAddModal: false,
    deleteAddModal: false,
    linkDeleteModal: false,
    dataUrl: "",
  });

  const handleGetFolderId = (id) => {
    setAllMenuId(id);
  };

  const handleLoad = async (id = 0) => {
    try {
      const response = await getAPI(
        `/users/1${id === 0 ? `/links` : `/folders/${id}`}`
      );
      const result = response.data;
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUser = async () => {
    const user = await getAPI("/sample/user");
    setUser(user);
  };

  useEffect(() => {
    handleLoad(listId);
    handleUser();
  }, [listId]);

  useEffect(() => {
    handleUser();
  }, []);

  const isShowModal = (linkAddModal) => {
    setAddModal(linkAddModal);
  };

  const getFolderList = async () => {
    try {
      const result = getAPI(`/users/1/folders`);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const listsData = useGetJson(getFolderList);

  return (
    <>
      {Object.values(addModal).some((value) => value === true) ? (
        <BackgroundContainer />
      ) : null}
      <Header user={user} />
      <AddLink setIsShowModal={isShowModal} />
      {addModal.linkModal ? (
        <Modal
          title="폴더에 추가"
          folderData={data}
          folderMenus={listsData?.data}
          isShowModal={isShowModal}
          linkAddModal={addModal.linkModal}
        />
      ) : null}
      {addModal.folderAddModal ? (
        <Modal
          title="폴더 추가"
          folderData={data}
          folderMenus={listsData?.data}
          isShowModal={isShowModal}
          folderAddModal={addModal.folderAddModal}
        />
      ) : null}
      {addModal.shareAddModal ? (
        <Modal
          title="폴더 공유"
          folderData={data}
          folderMenus={listsData?.data}
          isShowModal={isShowModal}
          shareModal={addModal.shareAddModal}
          menusId={allMenuId}
        />
      ) : null}
      {addModal.editAddModal ? (
        <Modal
          title="폴더 이름 변경"
          folderData={data}
          folderMenus={listsData?.data}
          isShowModal={isShowModal}
          editModal={addModal.editAddModal}
        />
      ) : null}

      {addModal.deleteAddModal ? (
        <Modal
          title="폴더 삭제"
          folderData={data}
          folderMenus={listsData?.data}
          isShowModal={isShowModal}
          deleteModal={addModal.deleteAddModal}
        />
      ) : null}
      {addModal.linkDeleteModal ? (
        <Modal
          title="링크 삭제"
          folderData={data}
          folderMenus={listsData?.data}
          isShowModal={isShowModal}
          linkDeleteModal={addModal.linkDeleteModal}
          dataUrl={addModal.dataUrl}
        />
      ) : null}
      <Search />
      <Category
        changeTitle={setTitle}
        changeID={setListId}
        isShowModal={isShowModal}
      />
      <FolderFunction titleName={title} isShowModal={isShowModal} />
      {data[0] ? (
        <Contents items={data} isShowModal={isShowModal} />
      ) : (
        <NoLink>저장된 링크가 없습니다.</NoLink>
      )}
      <AddFolderBtn>폴더 추가 +</AddFolderBtn>
      <Footer />
    </>
  );
}

const BackgroundContainer = styled.div`
  height: 100%;
  background-color: #000000;
  opacity: 0.4;
  width: 100%;
  position: absolute;
  z-index: 2;
`;

const NoLink = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-top: 40px;
`;

const AddFolderBtn = styled.button`
  border: none;
  border-radius: 20px;
  border: 1px solid var(--Linkbrary-white, #fff);
  background: var(--Linkbrary-primary-color, #6d6afe);
  position: sticky;
  left: 40%;
  bottom: 101px;
  padding: 8px 24px;
  display: none;

  color: var(--Linkbrary-gray10, #e7effb);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  @media (max-width: 767px) {
    display: block;
  }
`;

export default Folder;
