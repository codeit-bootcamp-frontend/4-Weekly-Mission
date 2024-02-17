import { Outlet } from "react-router-dom";
import Navigation from "../../../component/Navigation/Navigation";
import Footer from "../../../component/Footer/Footer";

const FolderPageLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default FolderPageLayout;
