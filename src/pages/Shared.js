import Navbar from "../components/Navbar";
import Favorites from "../components/shared/Favorites";
import LinkSearch from "../components/LinkSearch";
import CardList from "../components/shared/CardList";

function Shared() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Favorites />
      </div>
      <div className="link-search-card-list">
        <LinkSearch />
        <CardList />
      </div>
    </>
  );
}

export default Shared;
