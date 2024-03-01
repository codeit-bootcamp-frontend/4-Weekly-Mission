import NavigationBar from "../components/NavigationBar";
import FolderBar from "../components/FolderBar";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <FolderBar />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;
