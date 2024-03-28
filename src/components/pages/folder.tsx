import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import ModalPortal from '../Portal';

export default function Folder() {
  return (
    <ModalPortal>
      <Header style="headerFolder" />
      <Section style="sectionFolder" />
      <Footer />
    </ModalPortal>
  );
}
