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
      const data = await fetchCards();
      setCards(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="folderCardPage--section">
        <SearchCard />
        <FolderListData />
        <CardList cards={cards} />
      </section>
    </>
  );
}

export default FolderCardPage;
