import CardGrid from './CardGrid';
import SearchBar from './ui/SearchBar';
import './SharedSection.css';

function SharedSection() {
  return (
    <section className='section-share'>
      <SearchBar />
      <CardGrid />
    </section>
  );
}

export default SharedSection;
