import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { getFolders } from "../../api/folder";
import { useState } from "react";
import style from "styled-components";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Header from "../../components/Header/Header";
import { getSampleUser } from "../../api/sampleUser";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import { getSampleFolder } from "../../api/sampleFolder";

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

// 데이터가 로딩되고나서 reload를 하면 데이터가 없어지는 문제가 있습니다.(?)

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [folders, setFolder] = useState([]);
  const [user, setUser] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const links = folders?.links ?? [];
  useEffect(() => {
    const fetchFolders = async () => {
      setIsLoading(true);
      const { folder } = await getSampleFolder();
      const user = await getSampleUser();
      console.log(user);
      setFolder(folder);
      setUserEmail(user.email);
      setUser(folder.owner);
      setIsLoading(false);
    };
    fetchFolders();
  }, []);

  if (isLoading) return <div>로딩중...</div>;
  return (
    <div>
      <NavigationBar userEmail={userEmail} />
      <Header profileImageSrc={user.profileImageSource} name={user.name} />

      <S.MainContentContainer>
        <SearchBar />
        <S.CardList>
          {links.map((link) => (
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
