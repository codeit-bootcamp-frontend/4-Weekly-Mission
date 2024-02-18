import { useEffect, useState } from "react";
import "../styles/FolderSharedPage.css";
import Footer from "../common/footer/Footer";
import NavigationBar from "../common/navigationBar/NavigationBar";
import Cards from "../components/cards/Cards";
import SearchBar from "../common/searchBar/SearchBar";
import UserInformation from "../components/folderInformation/FolderInformation";
import { getSampleCards, getSampleUser } from "../services/api";

function FolderSharedPage() {
  const [folderOwners, setFolderOwners] = useState([]);
  const [folderName, setFolderName] = useState();
  const [SampleCards, setSampleCards] = useState([]);
  const [sampleUserInfo, setSampleUserInfo] = useState([]);

  // 카드 정보 받아오기
  const getSampleCardsInfo = async () => {
    const sampleCardsInfo = await getSampleCards();
    const folderOwners = sampleCardsInfo.folder.owner;
    const folderName = sampleCardsInfo.folder.name;
    const sampleCards = sampleCardsInfo.folder.links;
    setFolderOwners(folderOwners);
    setFolderName(folderName);
    setSampleCards(sampleCards);
  };

  // 유저 정보 받아오기
  const getSampleUserInfo = async () => {
    const sampleUserInfo = await getSampleUser();
    setSampleUserInfo(sampleUserInfo);
  };

  useEffect(() => {
    getSampleCardsInfo();
    getSampleUserInfo();
  }, []);

  return (
    <div className="FolderPage">
      <header>
        <NavigationBar userInfo={sampleUserInfo} />
      </header>
      <main>
        <UserInformation folderOwners={folderOwners} folderName={folderName} />
        <div className="content_container">
          <SearchBar />
          <Cards cards={SampleCards} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FolderSharedPage;
