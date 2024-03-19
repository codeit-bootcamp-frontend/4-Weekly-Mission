import Header from '../Header/Header';
import Section from '../Section/Section';
import Main from '../CardList/CardList';
import Footer from '../Footer/Footer';
import SearchBar from '../SearchBar/SearchBar';
import CardList from '../CardList/CardList';

export default function Shared() {
  return (
    <>
      <Header style="headerShared" />
      <Section style="sectionShared" />
      <SearchBar />
      <CardList />
      <Footer />
    </>
  );
}
