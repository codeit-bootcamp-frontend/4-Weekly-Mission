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
  const { folderId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [folders, setFolder] = useState([]);
  const [user, setUser] = useState([]);
  const [links, setLinks] = useState();
  const linksData = links?.data ?? [];
  useEffect(() => {
    const fetchFolders = async () => {
      setIsLoading(true);
      const folders = await getFolders();
      const user = await getSampleUser();
      const links = await getLinks();
      console.log(folders);
      console.log(links);
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
      <NavigationBar userEmail={user.email} />
      <AddLink />
      <S.MainContentContainer>
        <SearchBar />
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
        <S.CardList>
          {linksData.map((link) => (
            <Card
              key={link.id}
              thumbnailSrc={link.imageSource}
              description={link.description}
              date={formatDate(link.createdAt)}
              url={link.url}
              title={link.title}
            />
          ))}
        </S.CardList>
      </S.MainContentContainer>
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
  `,
};

export default Home;
