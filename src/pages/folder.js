import Footer from "../components/Common/Footer";
import Nav from "../components/Common/Nav";
import LinkForm from "../components/LinkForm";
import Search from "../components/Search/Search";
import LinkCategory from "../components/FolderContent/LinkCategory";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFolders, getFolderLinks } from "../api";
import shareIcon from "../image/share.svg";
import penIcon from "../image/pen.svg";
import deleteIcon from "../image/delete.svg";
import "./folder.scss";
import CardGrid from "../components/CardGrid/Cardgrid";
import NoLink from "../components/FolderContent/NoLink";
import ShareLink from "../components/Modal/ShareLink";
import ChangeName from "../components/Modal/ChangeName";
import DeleteFolder from "../components/Modal/DeleteFolder";

const Folder = () => {
  const [folders, setFolders] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentCategoryId, setCurrentCategoryId] = useState("");
  const [folderLinkList, setFolderLinkList] = useState([]);
  const [showButtons, setShowButtons] = useState(true);
  const params = useParams();
  const [showShareLinkModal, setShowShareLinkModal] = useState(false);
  const [showChangeNameModal, setShowChangeNameModal] = useState(false);
  const [showDeleteFolderModal, setShowDeleteFolderModal] = useState(false);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await getFolders();
        setFolders(response.data);
      } catch (error) {
        console.error("폴더 데이터 불러오기 실패: ", error);
      }
    };
    fetchFolders();
  }, []);

  useEffect(() => {
    const fetchLinks = async () => {
      const folderId =
        params.folderId === "all" || isNaN(params.folderId)
          ? null
          : +params.folderId;

      try {
        const response = await getFolderLinks(folderId);
        setFolderLinkList(response.data);
      } catch (error) {
        console.error("링크 데이터 불러오기 실패: ", error);
      }
    };

    fetchLinks();
  }, [params.folderId]);

  const onClickCategory = async (categoryName) => {
    if (currentCategory === categoryName) return;

    try {
      let currentCategoryId = "";
      if (categoryName !== "전체") {
        const selectedFolder = folders.find(
          (folder) => folder.name === categoryName
        );
        currentCategoryId = selectedFolder ? selectedFolder.id : "";
      }

      const response = await getFolderLinks(currentCategoryId.toString());
      setCurrentCategory(categoryName);
      setCurrentCategoryId(currentCategoryId);
      setFolderLinkList(response.data);
      setShowButtons(categoryName !== "전체");
    } catch (error) {
      console.error("링크 데이터 불러오기 실패: ", error);
    }
  };

  const openShareLinkModal = () => {
    setShowShareLinkModal(true);
  };

  const openChangeNameModal = () => {
    setShowChangeNameModal(true);
  };

  const openDeleteFolderModal = () => {
    setShowDeleteFolderModal(true);
  };

  const closeShareLinkModal = () => {
    setShowShareLinkModal(false);
  };

  const closeChangeNameModal = () => {
    setShowChangeNameModal(false);
  };

  const closeDeleteFolderModal = () => {
    setShowDeleteFolderModal(false);
  };

  return (
    <>
      <Nav sticky={false} />
      <header>
        <LinkForm />
      </header>
      <main className="folder">
        <Search />
        <LinkCategory
          categoryList={folders}
          currentCategory={currentCategory}
          onClick={onClickCategory}
        />
        <div className="main-button">
          <h2>{currentCategory}</h2>
          {showButtons && (
            <div className="btn">
              <button onClick={openShareLinkModal}>
                <img src={shareIcon} alt="공유 아이콘" />
                공유
              </button>
              <ShareLink
                isOpen={showShareLinkModal}
                onClose={closeShareLinkModal}
                selectedName={currentCategory}
                folderId={currentCategoryId}
              />
              <button onClick={openChangeNameModal}>
                <img src={penIcon} alt="이름 변경 아이콘" />
                이름변경
              </button>
              <ChangeName
                isOpen={showChangeNameModal}
                onClose={closeChangeNameModal}
              />
              <button onClick={openDeleteFolderModal}>
                <img src={deleteIcon} alt="삭제 아이콘" />
                삭제
              </button>
              <DeleteFolder
                isOpen={showDeleteFolderModal}
                onClose={closeDeleteFolderModal}
                selectedName={currentCategory}
              />
            </div>
          )}
        </div>
        {folderLinkList && folderLinkList.length > 0 ? (
          <CardGrid formattedCards={folderLinkList} />
        ) : (
          <NoLink />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Folder;
