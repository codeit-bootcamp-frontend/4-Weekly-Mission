import "./App.css";
import "./global.css";
import Navigation from "../src/component/Navigation/Navigation";
import FolderNameSection from "../src/component/MainSection/FolderNameSection/FolderNameSection";
import Footer from "./component/Footer/Footer";
import SearchBar from "./component/MainSection/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className="Section">
        <FolderNameSection />
        <div className="Section-frame">
          <SearchBar />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
