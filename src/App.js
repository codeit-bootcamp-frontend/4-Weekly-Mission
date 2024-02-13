import Navbar from "layout/Navbar/Navbar";
import Footer from "layout/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
