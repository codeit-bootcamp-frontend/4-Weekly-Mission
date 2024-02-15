import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import CardList from './components/CardList';
import useSampleData from './hooks/useSampleData';
import './App.css';

function App() {
  const { links, name, owner } = useSampleData('folder') || {};

  return (
    <div>
      <Nav />
      <Header folderName={name} owner={owner} />
      <CardList cardsData={links} />
      <Footer />
    </div>
  );
}

export default App;
