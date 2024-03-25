import Footer from "../components/Common/Footer";
import Nav from "../components/Common/Nav";
import LinkForm from "../components/LinkForm";
import Search from "../components/Search/Search";
import LinkCategory from "../components/FolderContent/LinkCategory";
import { useInView } from "react-intersection-observer";
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
import { FolderLinksResponse, FoldersData, LinkData } from "../types/interface";

const Folder = () => {
  const [folders, setFolders] = useState<FoldersData[] | null>([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const [folderLinkList, setFolderLinkList] = useState<LinkData[]>([]);
  const [showButtons, setShowButtons] = useState(true);
  const params = useParams<{ folderId: string }>();
  const [showShareLinkModal, setShowShareLinkModal] = useState(false);
  const [showChangeNameModal, setShowChangeNameModal] = useState(false);
  const [showDeleteFolderModal, setShowDeleteFolderModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [headerRef, headerInView] = useInView();
  const [footerRef, footerInView] = useInView();

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
    setCurrentCategory("전체");
  }, []);

  useEffect(() => {
    const fetchLinks = async () => {
      const folderId = params.folderId
        ? isNaN(Number(params.folderId))
          ? null
          : +params.folderId
        : null;

      try {
        const response = await getFolderLinks(folderId);
        const links = response.data;

        // 검색어가 비어 있는 경우 전체 링크 목록을 보여줌
        if (!searchText) {
          setFolderLinkList(links);
          return;
        }

        // 검색어가 있는 경우 검색어에 해당하는 링크만 필터링하여 보여줌
        const filteredLinks = links.filter(
          (link) =>
            link.url.includes(searchText) ||
            (link.title && link.title.includes(searchText)) ||
            (link.description && link.description.includes(searchText))
        );
        setFolderLinkList(filteredLinks);
      } catch (error) {
        console.error("링크 데이터 불러오기 실패: ", error);
      }
    };

    fetchLinks();
  }, [params.folderId, searchText]);

  const onClickCategory = async (categoryName: string) => {
    if (currentCategory === categoryName) return;

    try {
      let currentCategoryId = 0;
      if (categoryName !== "전체") {
        const selectedFolder = folders?.find(
          (folder) => folder.name === categoryName
        );
        currentCategoryId = selectedFolder ? selectedFolder.id : 0;
      }

      const response: FolderLinksResponse = await getFolderLinks(
        currentCategoryId
      );
      setCurrentCategory(categoryName);
      setCurrentCategoryId(currentCategoryId);
      setFolderLinkList(response.data);
      setShowButtons(categoryName !== "전체");
    } catch (error) {
      console.error("링크 데이터 불러오기 실패: ", error);
    }
  };

  // 검색어 변경 핸들러
  const handleSearch = (text: string) => {
    setSearchText(text);
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
      <header ref={headerRef}>
        <LinkForm />
      </header>
      <main className="folder">
        <Search
          folderLinkList={folderLinkList}
          setFilteredLinks={setFolderLinkList}
          onSearch={handleSearch}
        />
        <LinkCategory
          categoryList={folders || []}
          currentCategory={currentCategory}
          onClick={onClickCategory}
        />
        <div className="main-button">
          {searchText ? (
            <h2 className="searchText">
              <p>{searchText}</p>
              (으)로 검색한 결과입니다.
            </h2>
          ) : (
            <h2 className="headingText">{currentCategory}</h2>
          )}
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
          <>
            <CardGrid formattedCards={folderLinkList} searchText={searchText} />
          </>
        ) : (
          <NoLink />
        )}
      </main>
      <div className="bottom">
        <div ref={footerRef} className="footer">
          <Footer />
        </div>
        {(!headerInView || footerInView) && (
          <div
            className={`fixed-link-section ${footerInView ? "on-footer" : ""}`}
          >
            <LinkForm />
          </div>
        )}
      </div>
    </>
  );
};

export default Folder;
