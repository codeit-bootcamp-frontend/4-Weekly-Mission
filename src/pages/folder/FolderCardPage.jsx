import { useEffect, useState } from "react";
import "./FolderCardPage.css";
import FolderListData from "../../components/folderList/FolderListData";
import CardList from "../../components/card/CardList";
import SearchCard from "../../components/searchBar/SearchCard";
import { fetchShareCards } from "../../apis/sharedApi";

function FolderCardPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchShareCards();
      setCards(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="folderCardPage--section">
        <SearchCard />
        <article className="folderCardPage--content">
          <FolderListData />
          <CardList cards={cards} />
        </article>
      </section>
    </>
  );
}

export default FolderCardPage;
