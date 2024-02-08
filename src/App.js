import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header isSigned={true} />
      <Footer />
    </div>
  );
}

export default App;
