import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavigationBar from "./Navbar";

function App() {
  return (
    <div>
      <NavigationBar />
      <div><Outlet /></div>
      <Footer />
    </div>
  );
}

export default App;