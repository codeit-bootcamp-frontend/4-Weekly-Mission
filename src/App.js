import "./App.css";
import "./global.css";
import Navigation from "../src/component/Navigation/Navigation";
import FolderNameSection from "../src/component/FolderNameSection/FolderNameSection";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section>
        <FolderNameSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;
