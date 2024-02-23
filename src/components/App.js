import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
