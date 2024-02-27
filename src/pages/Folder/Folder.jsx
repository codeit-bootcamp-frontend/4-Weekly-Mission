import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { getFolders } from "../../api/folder";
import { useState } from "react";
import style from "styled-components";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import FolderButton from "../../components/FolderButton/FolderButton";
import { getLinks } from "../../api/links";
import { getSampleUser } from "../../api/sampleUser";
import { useParams } from "react-router-dom";
import AddLink from "../../components/AddLink/AddLink";
import ShareEditDelete from "../../components/ShareEditDelete/ShareEditDelete";
import Modal from "../../components/Modal/Modal";

//TODO: Add link Button on mobile view
//TODO: Add Buttons on all folder button
const MOCK_CARD_DATA = {
  thumbnailSrc: "https://picsum.photos/300",
  contents: "lorem ipsum",
  date: "2021-07-07",
};

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();

  return `${year}. ${month}. ${day}`;
}

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [folders, setFolder] = useState([]);
  const [user, setUser] = useState([]);
  const [links, setLinks] = useState();
  const [visivlePopoverId, setVisiblePopoverId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalColor, setModalColor] = useState("");
  const linksData = links?.data ?? [];

  function handleTogglePopover(id) {
    console.log(visivlePopoverId);
    console.log("awefa");
    if (visivlePopoverId == id) {
      setVisiblePopoverId(null);
    } else {
      setVisiblePopoverId(id);
    }
  }

  function handleOpenModal(isModalOpen) {
    if (isModalOpen) {
      setIsModalOpen(false);
      setModalColor("red");
    } else {
      setIsModalOpen(true);
    }
  }

  useEffect(() => {
    const fetchFolders = async () => {
      setIsLoading(true);
      const folders = await getFolders();
      const user = await getSampleUser();
      const links = await getLinks();
      // console.log(folders);
      // console.log(links);
      setFolder(folders.data);
      setUser(user);
      setLinks(links);
      setIsLoading(false);
    };
    fetchFolders();
  }, []);

  if (isLoading) return <div>로딩중...</div>;

  const handleFolderClick = async (folderId) => {
    setIsLoading(true);
    const links = await getLinks(folderId);
    setLinks(links);
    setIsLoading(false);
  };

  return (
    <div>
      {isModalOpen ? (
        <Modal
          handleOpenModal={handleOpenModal}
          isModalOpen={isModalOpen}
          color={modalColor}
        />
      ) : null}
      <NavigationBar userEmail={user.email} />
      <AddLink />
      <S.MainContentContainer>
        <SearchBar />
        <S.FoldersAndAddButtonContainer>
          <S.FoldersContainer>
            <FolderButton
              onClick={() => handleFolderClick(null)}
              folderName="전체"
            />
            {folders.map((folder) => (
              <FolderButton
                onClick={handleFolderClick}
                key={folder.id}
                folderName={folder.name}
                folderId={folder.id}
              />
            ))}
          </S.FoldersContainer>
          <S.AddFolderBotton>폴더추가</S.AddFolderBotton>
        </S.FoldersAndAddButtonContainer>

        <S.ShareEditDeleteContainer>
          <ShareEditDelete
            openModal={handleOpenModal}
            isModalOpen={isModalOpen}
            color={modalColor}
          />
        </S.ShareEditDeleteContainer>

        <S.CardList>
          {linksData.map((link) => (
            <Card
              key={link.id}
              id={link.id}
              thumbnailSrc={link.imageSource}
              description={link.description}
              date={formatDate(link.createdAt)}
              url={link.url}
              title={link.title}
              onTogglePopover={handleTogglePopover}
              isPopoverVisible={visivlePopoverId === link.id}
            />
          ))}
        </S.CardList>
      </S.MainContentContainer>
      <S.AddFolderBottomButton>폴더 추가</S.AddFolderBottomButton>
      <Footer />
    </div>
  );
}

const S = {
  MainContentContainer: style.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 32px;
  `,

  CardList: style.section`
    display: grid;
    place-items: center;
    gap: 20px;

    grid-template-columns: repeat(1, 1fr);
    justify-items: center;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `,

  FoldersContainer: style.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    align-items: space-between;
  `,

  ShareEditDeleteContainer: style.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 32px;
  `,

  AddFolderBottomButton: style.button`
  position: fixed; // This makes the button stick to a position relative to the viewport
  bottom: 101px; // This places the button 20px from the bottom of the viewport
  left: 45%; // This centers the button horizontally
  border-radius: 20px;
  border: 1px solid var(--Linkbrary-white, #FFF);
  background: var(--Linkbrary-primary-color, #6D6AFE);
  padding: 8px 24px;

  @media (min-width: 768px) {
    visibility: hidden;
  `,

  FoldersAndAddButtonContainer: style.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  gap: 8px;
  width: 100%;
  height: 40px;
  `,

  AddFolderBotton: style.button`
  visibility: hidden;
  display: flex;
  width: 106px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    visibility: visible;
  }`,
};

export default Home;
