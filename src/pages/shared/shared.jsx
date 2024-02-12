import Header from "./header/Header.jsx";
import SearchBar from "./search-bar/SearchBar.jsx";

function Shared() {
  return (
    <>
      <Header />
      <article>
        <SearchBar />
      </article>
    </>
  );
}

export default Shared;
