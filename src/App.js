import Gnb from "./components/Gnb";
import Header from "./components/Header";
import LinkSearch from "./components/LinkSearch";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

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
