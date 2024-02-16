import "./colors.css";
import "./global.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Shared from "./components/Shared/Shared";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Shared />
      <Footer />
    </div>
  );
}

export default App;
