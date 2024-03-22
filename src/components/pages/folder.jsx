import Header from '../Header/Header';
import FilterBar from '../FilterBar/FilterBar';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import SearchBar from '../SearchBar/SearchBar';
import ModalPortal from '../../utils/Portal';

export default function Folder() {
  return (
    <>
      <ModalPortal>
        <Header style="headerFolder" />
        <Section style="sectionFolder" />
        <SearchBar />
        <FilterBar />
        <Footer />
      </ModalPortal>
    </>
  );
}
