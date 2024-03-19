import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import FilterBar from '../FilterBar/FilterBar';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import SearchBar from '../SearchBar/SearchBar';

export default function Folder() {
  return (
    <>
      <Header style="headerFolder" />
      <Section style="sectionFolder" />
      <SearchBar />
      <FilterBar />
      <CardList />
      <Footer />
    </>
  );
}
