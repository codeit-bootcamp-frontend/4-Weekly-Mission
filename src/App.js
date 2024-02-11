import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Gnb from "./components/Gnb";
import Header from "./components/Header";
import LinkSearch from "./components/LinkSearch";

function App() {
  return (
    <div className="App">
      <Gnb />
      <Header />
      <LinkSearch />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
