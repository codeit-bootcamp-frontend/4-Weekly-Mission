import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = ({ children, isSticky }) => {
  return (
    <>
      <NavigationBar isSticky={isSticky} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
