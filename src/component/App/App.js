import "./App.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
