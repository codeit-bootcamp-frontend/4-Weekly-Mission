import { getFolder } from "../api";
import "./App.css";
import NavigationBar from "../components/NavigationBar";
import { useEffect, useState } from "react";
import FolderBar from "../components/FolderBar";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";

function App() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    async function getProFileFolder() {
      try {
        const {
          folder: { name, owner, links },
        } = await getFolder();
        setCardList(links);
      } catch (error) {
        console.error(error);
      }
    }

    getProFileFolder();
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <FolderBar />
      <CardSection cardList={cardList} />
      <Footer />
    </div>
  );
}

export default App;
