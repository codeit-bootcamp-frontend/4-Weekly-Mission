import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainContent from '../components/main/MainContent';
import GlobalStyles from '../styles/Global.styled';

function MainPage() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default MainPage;
