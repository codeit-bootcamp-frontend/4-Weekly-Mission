import Header from './components/header/Header';
import Footer from './components/Footer';

const Layout = ({ user, isSticky, children }) => {
  return (
    <>
      <Header user={user} isSticky={isSticky} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
