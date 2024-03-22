import FolderContainer from "./FolderContainer";
import SearchLinkInput from "./SearchLinkInput";
import MainContainer from "./MainContainer";
import AddLink from "./addLink/AddLink";
import FolderMain from "./folderMain/FolderMain";
import { useEffect, useMemo, useState } from "react";
import SearchLinkInputContainer from "./SearchLinkInputContainer";
import SearchCloseButton from "./SearchCloseButton";
import { getFolderList, getFolderListData } from "../../util/api";
import ModalPortal from "./modal/ModalPortal";
import Modal from "./modal/Modal";
import ModalShare from "./modal/share/ModalShare";
import ModalEdit from "./modal/edit/ModalEdit";
import ModalDeleteFolder from "./modal/delete-folder/ModalDeleteFolder";
import ModalDeleteLink from "./modal/delete-link/ModalDeleteLink";
import ModalAddFolder from "./modal/add-folder/ModalAddFolder";
import addImgPurple from "../../assets/img/png/add-purple.png";
import addImgWhite from "../../assets/img/png/add-white.png";
import { useUserProfile } from "../ContextProvider";
import { handleButtonListItemClick } from "../../@types/FolderMain";
import { FolderListItem } from "../../@types/FolderListItem";
import useInput from "../../hooks/useInput";
const ALL_LIST_BUTTON_ID = 0;
function Folder({
  footerTarget,
}: {
  footerTarget: React.RefObject<HTMLDivElement>;
}) {
  const [folderListItem, setFolderListItem] = useState<FolderListItem[]>([]);
  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useInput<FolderListItem>(folderListItem);
  const userProfile = useUserProfile();
  const [linkUrl, setLinkUrl] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [folderList, setFolderList] = useState<string[]>([]);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isSelectedAll, setIsSelectedAll] =
    useState<typeof ALL_LIST_BUTTON_ID>(ALL_LIST_BUTTON_ID);
  const [folderTitleName, setFolderTitleName] = useState<string>("");
  const [clickedButtonId, setClickedButtonId] = useState<number>(0);

  const handleButtonListItemClick: handleButtonListItemClick = async (
    id,
    name
  ) => {
    setClickedButtonId(id);
    setFolderTitleName(name);
    const result = await getFolderListData(id);
    setIsSelectedAll(ALL_LIST_BUTTON_ID);

    if (!result) return;

    const data = result.data;
    setFolderListItem(data);
  };

  const handleFolderList = async () => {
    const result = await getFolderList();
    if (!result) return;
    const data = result.data;
    setFolderList(data);
  };

  const memoizedAddImgSrc = useMemo(
    () => (windowWidth >= 768 ? addImgPurple : addImgWhite),
    [windowWidth]
  );
  const memoizedAddImgAlt = useMemo(
    () => (windowWidth >= 768 ? `addImgPurple` : `addImgWhite`),
    [windowWidth]
  );

  const handleModal = (type?: string, link?: string) => {
    setIsModal(!isModal);

    if (type) {
      setModalType(type);
    }

    if (link) {
      setLinkUrl(link);
    }
  };

  useEffect(() => {
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
      <FolderContainer>
        <AddLink footerTarget={footerTarget} />
        <MainContainer>
          <SearchLinkInputContainer>
            <SearchLinkInput
              id="searchLinkInput"
              type="text"
              placeholder="링크를 검색해 보세요"
              onClick={handleInputClick}
              onChange={handleInputChange}
              value={inputValue}
            />
            {isFocus && (
              <SearchCloseButton
                ref={closeButtonRef}
                onClick={handleCloseClick}
              />
            )}
          </SearchLinkInputContainer>

          <FolderMain
            filterdFolderListItem={filterdItem}
            handleButtonListItemClick={handleButtonListItemClick}
            clickedButtonId={clickedButtonId}
            memoizedAddImgSrc={memoizedAddImgSrc}
            memoizedAddImgAlt={memoizedAddImgAlt}
            isSelectedAll={isSelectedAll}
            folderListItem={folderListItem}
            folderList={folderList}
            folderTitleName={folderTitleName}
            handleModal={handleModal}
            value={inputValue}
          />
        </MainContainer>
      </FolderContainer>
      {isModal && (
        <ModalPortal>
          <Modal onModal={handleModal}>
            {modalType === "share" && (
              <ModalShare
                folderId={clickedButtonId}
                folderName={folderTitleName}
                userId={userProfile?.id}
              />
            )}
            {modalType === "editFolder" && (
              <ModalEdit folderName={folderTitleName} />
            )}
            {modalType === "deleteFolder" && (
              <ModalDeleteFolder folderName={folderTitleName} />
            )}
            {modalType === "deleteLink" && (
              <ModalDeleteLink linkUrl={linkUrl} />
            )}
            {modalType === "addFolder" && <ModalAddFolder />}
          </Modal>
        </ModalPortal>
      )}
    </>
  );
}
export default Folder;
