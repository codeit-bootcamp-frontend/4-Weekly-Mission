import Header from './header/Header';
import Footer from './Footer';

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
