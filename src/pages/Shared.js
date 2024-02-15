import useSampleData from '../hooks/useSampleData';
import Nav from '../components/Nav.js';
import Header from '../components/Header.js';
import CardList from '../components/CardList.js';
import Footer from '../components/Footer.js';

export default function Shared() {
  const { links, name, owner } = useSampleData('folder') || {};

  return (
    <>
      <Nav />
      <Header folderName={name} owner={owner} />
      <CardList cardDataList={links} />
      <Footer />
    </>
  );
}
