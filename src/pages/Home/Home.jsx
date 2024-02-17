import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { getFolders } from "../../api/folder";
import { useState } from "react";
import style from "styled-components";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Header from "../../components/Header/Header";
import { getUser } from "../../api/user";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";

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
  const [folder, setFolder] = useState({});
  const [user, setUser] = useState({});
  const links = folder?.links ?? [];
  useEffect(() => {
    const fetchFolders = async () => {
      setIsLoading(true);
      const { folder } = await getFolders();
      const user = await getUser();
      console.log(user);
      setFolder(folder);
      setUser(user);
      setIsLoading(false);
    };
    fetchFolders();
  }, []);

  if (isLoading) return <div>로딩중...</div>;
  return (
    <div>
      <NavigationBar userEmail={user.email} />
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
};

export default Home;
