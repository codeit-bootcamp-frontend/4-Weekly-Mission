import CardGrid from '../../../components/CardGrid';
import SearchBar from '../../../components/SearchBar';
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
