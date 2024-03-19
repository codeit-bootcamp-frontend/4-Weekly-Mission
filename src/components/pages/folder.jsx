import Header from '../Header/Header';
import MainFolder from '../Main/MainFolder';
import Footer from '../Footer/Footer';
import SectionFolder from '../Section/SectionFolder';

export default function Folder() {
  return (
    <>
      <Header style="headerFolder" />
      <SectionFolder />
      <MainFolder />
      <Footer />
    </>
  );
}
