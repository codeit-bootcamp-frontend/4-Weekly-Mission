import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { UserProvider } from "../context/UserContext";

function App({ children }) {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Outlet />
        <Footer className="App-Footer" />
      </UserProvider>
    </div>
  );
}

export default App;
