import '../style/Main.css';
import CardGrid from './CardGrid';
import SearchBar from './SearchBar';

function Main() {
  return (
    <main>
      <section>
        <SearchBar />
        <CardGrid />
      </section>
    </main>
  );
}

export default Main;
