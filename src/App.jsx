import CardsArea from "./components/CardsArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Banner /> */}
      <CardsArea />
      <Footer />
    </div>
  );
}

export default App;
