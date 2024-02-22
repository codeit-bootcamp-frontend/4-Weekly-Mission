import { useEffect, useState } from "react";
import { getFolderList, getFolderListData } from "../../util/api";
import FolderTitle from "./folderTitle/FolderTitle";

import addImgPurple from "../../../assets/img/png/add-purple.png";
import addImgWhite from "../../../assets/img/png/add-white.png";

import { useUserProfile } from "../../ContextProvider";
import { useMemo } from "react";
import FolderButton from "./folderButton/FolderButton";
import FolderListItem from "./folderListItem/FolderListItem";
import ModalEdit from "../modal/edit/ModalEdit";
import ModalShare from "../modal/share/ModalShare";
import ModalDeleteFolder from "../modal/delete-folder/ModalDeleteFolder";
import ModalAddFolder from "../modal/add-folder/ModalAddFolder";
import ModalDeleteLink from "../modal/delete-link/ModalDeleteLink";
import ModalAdd from "../modal/add/ModalAdd";

function FolderMain() {
  const { userProfile } = useUserProfile();
  const [folderList, setFolderList] = useState(null);
  const [folderListItem, setFolderListItem] = useState(null);
  const [folderTitleName, setFolderTitleName] = useState("");
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [clickedButtonId, setClickedButtonId] = useState(null);
  const [mouseHoverkey, setMouseHoverKey] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [linkUrl, setLinkUrl] = useState(null);
  //공유,이름변경,삭제,폴더추가,링크삭제,폴더에추가
  const [isShare, setIsShare] = useState(false);
  const [isEditFolder, setIsEditFolder] = useState(false);
  const [isDeleteFolder, setIsDeleteFolder] = useState(false);
  const [isAddFolder, setIsAddFolder] = useState(false);
  const [isDeleteLink, setIsDeleteLink] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const memoizedAddImgSrc = useMemo(
    () => (windowWidth > 768 ? addImgPurple : addImgWhite),
    [windowWidth]
  );
  const memoizedAddImgAlt = useMemo(
    () => (windowWidth > 768 ? `addImgPurple` : `addImgWhite`),
    [windowWidth]
  );
  const handleListItemHover = (id) => {
    setMouseHoverKey(id);
  };
  const handleListItemMouseOut = () => {
    setMouseHoverKey(null);
  };

  const handleButtonListItemClick = async (id, name) => {
    setClickedButtonId(id);
    setFolderTitleName(name);
    const isAllListId = id === 0;
    const result = await getFolderListData(id);
    setIsSelectedAll(isAllListId);

    if (!result) return;

    const data = result.data;
    setFolderListItem(data);
  };

  const handleShareModal = () => setIsShare(!isShare);
  const handleEditFolderModal = () => setIsEditFolder(!isEditFolder);
  const handleDeleteFolderModal = () => setIsDeleteFolder(!isDeleteFolder);
  const handleAddFolderModal = () => setIsAddFolder(!isAddFolder);
  const handleAddModal = () => setIsAdd(!isAdd);
  const handleDeleteLinkModal = (link) => {
    setIsDeleteLink(!isDeleteLink);
    setLinkUrl(link);
  };

  useEffect(() => {
    const handleFolderList = async () => {
      const result = await getFolderList();
      if (!result) return;
      const data = result.data;
      setFolderList(data);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleFolderList();
    handleButtonListItemClick(0, "전체");
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {folderList?.length > 0 ? (
        <>
          <FolderButton
            handleButtonListItemClick={handleButtonListItemClick}
            folderList={folderList}
            clickedButtonId={clickedButtonId}
            memoizedAddImgSrc={memoizedAddImgSrc}
            memoizedAddImgAlt={memoizedAddImgAlt}
            handleAddFolderModal={handleAddFolderModal}
          />
          <FolderTitle
            folderTitleName={folderTitleName}
            isSelectedAll={isSelectedAll}
            handleShareModal={handleShareModal}
            handleEditFolderModal={handleEditFolderModal}
            handleDeleteFolderModal={handleDeleteFolderModal}
          />
          <FolderListItem
            folderListItem={folderListItem}
            handleListItemHover={handleListItemHover}
            mouseHoverkey={mouseHoverkey}
            handleListItemMouseOut={handleListItemMouseOut}
            handleDeleteLinkModal={handleDeleteLinkModal}
            handleAddModal={handleAddModal}
          />

          <ModalShare
            isShare={isShare}
            setIsShare={setIsShare}
            folderId={clickedButtonId}
            folderName={folderTitleName}
            userId={userProfile?.id}
          />
          <ModalEdit
            isEditFolder={isEditFolder}
            setIsEditFolder={setIsEditFolder}
            folderName={folderTitleName}
          />
          <ModalDeleteFolder
            isDeleteFolder={isDeleteFolder}
            setIsDeleteFolder={setIsDeleteFolder}
            folderName={folderTitleName}
          />
          <ModalDeleteLink
            isDeleteLink={isDeleteLink}
            setIsDeleteLink={setIsDeleteLink}
            linkUrl={linkUrl}
          />
          <ModalAddFolder
            isAddFolder={isAddFolder}
            setIsAddFolder={setIsAddFolder}
          />
          <ModalAdd isAdd={isAdd} setIsAdd={setIsAdd} />
        </>
      ) : (
        <div>저장된 폴더가 없습니다</div>
      )}
    </>
  );
}
export default FolderMain;
