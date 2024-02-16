import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar.js";
import useFolderData from "./apis/getFolderData.js";
import SearchBar from "./components/PageContent/SearchBar/SearchBar.js";
import PageBody from "./components/PageContent/PageBody/PageBody.js";
import Folder from "./components/PageContent/Folder/Folder.js";
import CardList from "./components/Card/CardList/CardList.js";
import "./global.css";

const App = () => {
  const { data } = useFolderData();
  const { name: folderName, owner } = data || {};
  const { name: ownerName, profileImageSource } = owner || {};
  return (
    <>
      <NavBar />
      <Folder
        profile={profileImageSource}
        name={ownerName}
        title={folderName}
      />
      <PageBody searchBar={<SearchBar />} cardList={<CardList />} />
      <Footer />
    </>
  );
};

export default App;
