import "./App.css";
import Footer from "./components/Footer";
import "./colors.css";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
