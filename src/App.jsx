import CardsArea from "./components/CardsArea";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Gnb from "./components/Gnb";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Gnb />
      <Banner />
      <CardsArea />
      <Footer />
    </div>
  );
}

export default App;
