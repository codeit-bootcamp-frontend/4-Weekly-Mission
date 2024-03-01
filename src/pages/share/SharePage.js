import { useEffect, useState } from "react";
import { getUserInfo, getFolders } from "../../api/api";
import "./SharePage.css";
import Gnb from "../../components/Gnb";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import CardsArea from "../../components/CardsArea";
import Footer from "../../components/Footer";

function SharePage() {
  const [userData, setItems] = useState([]);
  const [foldersData, setfoldersData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const result = await getUserInfo();
        setItems(result);
      } catch (error) {
        console.error(error);

        return;
      }
    };

    loadUserInfo();
  }, []);

  useEffect(() => {
    const loadFoldersData = async () => {
      try {
        // setIsLoading(true);
        const result = await getFolders();
        const { folder } = result;

        setfoldersData(folder.links);
        // setIsLoading(false);
      } catch (error) {
        console.error(error);
        // setError(error);
      }
    };

    loadFoldersData();
  }, []);

  return (
    <div className="sharePage">
      <Gnb userData={userData} />
      <Banner />
      <div className="sharePage_contents">
        <SearchBar />
        <CardsArea foldersData={foldersData} />
      </div>

      <Footer />
    </div>
  );
}

export default SharePage;
