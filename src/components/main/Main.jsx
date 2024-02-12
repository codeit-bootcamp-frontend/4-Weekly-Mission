import './Main.css';
import SearchBox from './searchBox/SearchBox';
import Section1 from './section1/Section1-profile';
import Section2 from './section2/Section2-card';

function Main({ folderOwner, folderName, cardData }) {
  return (
    <main className="main">
      <Section1 folderOwner={folderOwner} folderName={folderName} />
      <SearchBox />
      <Section2 cardData={cardData} />
    </main>
  );
}

export default Main;
