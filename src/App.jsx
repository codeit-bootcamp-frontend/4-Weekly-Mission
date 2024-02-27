import "./global.css";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";
import useProfile from "./hooks/useProfile";

function App() {
  const { profile } = useProfile();

  return (
    <div className="App">
      <Navbar profile={profile} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
