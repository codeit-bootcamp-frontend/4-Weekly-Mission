import useFetchData from '../hooks/useFetchData';
import Nav from '../components/Nav.js';
import Header from '../components/Header.js';
import CardList from '../components/CardList.js';
import Footer from '../components/Footer.js';

export default function Shared() {
  const { links, name, owner } = useFetchData('sampleFolder') || {};
  const currentUserData = useFetchData('sampleUser');

  return (
    <>
      <Nav currentUserData={currentUserData} />
      <Header folderName={name} owner={owner} />
      <CardList cardDataList={links} />
      <Footer />
    </>
  );
}
