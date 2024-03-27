import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NavigationBar from "./navigationBar/NavigationBar";

function PageLayout({
  footerTarget,
}: {
  footerTarget: React.RefObject<HTMLDivElement>;
}) {
  return (
    <>
      <NavigationBar />
      <div>
        <Outlet />
      </div>
      <Footer footerTarget={footerTarget} />
    </>
  );
}

export default PageLayout;
