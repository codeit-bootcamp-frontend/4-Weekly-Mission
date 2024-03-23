import Header from '../Header/Header';
import FilterBar from '../FilterBar/FilterBar';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import SearchBar from '../SearchBar/SearchBar';
import AddFolderModal from '../Modals/AddFolderModal';
import ModalPortal from '../../utils/Portal';
import EditNameModal from '../Modals/DeleteModal';

export default function Folder() {
  return (
    <>
      <ModalPortal>
        <AddFolderModal />
        <EditNameModal />
        <Header style="headerFolder" />
        <Section style="sectionFolder" />
        <SearchBar />
        <FilterBar />
        <Footer />
      </ModalPortal>
    </>
  );
}
