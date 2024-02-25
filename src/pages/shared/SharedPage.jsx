import ShareNav from "./ShareNav.jsx";
import CardList from "../../components/card/CardList.jsx";
import SearchCard from "../../components/searchBar/SearchCard.jsx";
import "./SharedPage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer.jsx";
import { fetchShareCards } from "../../apis/sharedApi.js";
import { useEffect, useState } from "react";

function SharedPage() {
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
      <Header sharedSticky={true} />
      <main className="sharedMain">
        <ShareNav />
        <section className="mainSection">
          <SearchCard />
          <CardList cards={cards} />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default SharedPage;
