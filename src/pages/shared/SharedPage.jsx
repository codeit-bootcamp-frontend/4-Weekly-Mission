import ShareNav from "./ShareNav.jsx";
import CardList from "../../components/card/CardList.jsx";
import SearchCard from "../../components/searchBar/SearchCard.jsx";
import "./SharedPage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer.jsx";

function SharedPage() {
  return (
    <>
      <Header />
      <main>
        <ShareNav />
        <section className="mainSection">
          <SearchCard />
          <CardList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SharedPage;
