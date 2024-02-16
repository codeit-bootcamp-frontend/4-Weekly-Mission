import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar.js";
import useFolderData from "./apis/getFolderData.js";
import SearchBar from "./components/PageContent/SearchBar/SearchBar.js";
import PageBody from "./components/PageContent/PageBody/PageBody.js";
import Folder from "./components/PageContent/Folder/Folder.js";
import CardList from "./components/Cards/CardList/CardList.js";
import Card from "./components/Cards/Card/Card.js";
import "./global.css";

const App = () => {
  const { data } = useFolderData();
  const { profileImage, ownerName, folderName, links } = data || {};
  return (
    <>
      <NavBar />
      <PageBody
        folderInfo={
          <Folder profile={profileImage} name={ownerName} title={folderName} />
        }
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <Card key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
      <Footer />
    </>
  );
};

export default App;
