import "./colors.css";
import "./global.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SharedPage from "./components/SharedPage/SharedPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <SharedPage />
      <Footer />
    </div>
  );
}

export default App;
