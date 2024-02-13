import "./App.css";
import "./global.css";
import Navigation from "./component/Navigation/Navigation";
import Footer from "./component/Footer/Footer";
import SearchBar from "./component/MainSection/SearchBar/SearchBar";
import Card from "./component/MainSection/Card/Card";
import FolderSection from "./component/MainSection/FolderSection/FolderSection";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className="main-section">
        <FolderSection />
        <div className="wrap">
          <SearchBar />
          <Card />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
