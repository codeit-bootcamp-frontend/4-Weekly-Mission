import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NavigationBar from "./navigationBar/NavigationBar";

function PageLayout() {
  return (
    <>
      <NavigationBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default PageLayout;
