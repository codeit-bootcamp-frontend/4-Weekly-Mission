import Footer from "./components/Footer";
import "./colors.css";
import "./global.css";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import SharedPage from "./components/SharedPage";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import ReadCard from "./components/ReadCard";
import useGetFolder from "./utils/useGetFolder";

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
