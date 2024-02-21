import Navbar from "layout/Navbar/Navbar";
import Footer from "layout/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
