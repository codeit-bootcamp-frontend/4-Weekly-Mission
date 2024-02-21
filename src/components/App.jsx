import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
