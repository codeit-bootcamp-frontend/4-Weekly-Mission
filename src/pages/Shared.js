import useFetchData from '../hooks/useFetchData';
import Nav from '../components/Nav.js';
import Header from '../components/Header.js';
import SearchBar from '../components/common/SearchBar';
import CardList from '../components/CardList.js';
import Footer from '../components/Footer.js';
import './Shared.css';

export default function Shared() {
  const { links, name, owner } = useFetchData('sampleFolder') || {};
  const currentUserData = useFetchData('sampleUser');

  return (
    <div className="SharedContainer">
      <Nav currentUserData={currentUserData} />
      <Header folderName={name} owner={owner} />
      <SearchBar />
      <CardList cardDataList={links} />
      <Footer />
    </div>
  );
}
