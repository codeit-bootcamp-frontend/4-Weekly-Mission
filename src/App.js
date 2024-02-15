import "./colors.css";
import "./global.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Header from "./components/Header/Header";
import SharedPage from "./components/SharedPage/SharedPage";
import SearchBar from "./components/SearchBar/SearchBar";
import CardList from "./components/CardList/CardList";
import ReadCard from "./components/ReadCard";
import useGetFolder from "./hooks/useGetFolder";
import Footer from "./components/Footer/Footer";

function App() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <div className="App">
      <NavigationBar />
      <SharedPage
        folderInfo={
          <Header
            profileImage={profileImage}
            ownerName={ownerName}
            folderInfo={folderName}
          />
        }
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
      <Footer />
    </div>
  );
}

export default App;
