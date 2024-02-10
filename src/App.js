import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/header/NavigationBar";
import Cards from "./components/main/Cards";
import SearchBar from "./components/main/SearchBar";
import UserInformation from "./components/main/UserInformation";
import { getCards } from "./services/api";

function App() {
  // card 정보 받아오기
  const [cardInfo, setCardInfo] = useState([]);

  const getCardsInfo = async () => {
    const cardsInfo = await getCards();
    const cardData = cardsInfo.folder.links;
    setCardInfo(cardData);
  };

  useEffect(() => {
    getCardsInfo();
  }, []);

  return (
    <div>
      {console.log(cardInfo)}
      <header>
        <NavigationBar />
      </header>
      <main>
        <UserInformation />
        <SearchBar />
        <Cards cardInfo={cardInfo} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
