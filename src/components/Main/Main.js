import "./Main.css";
import SearchBar from "./SearchBar";
import CardList from "./CardList";

function Main() {
  return (
    <main className="main flex-col">
      <div className="main-container width-full">
        <SearchBar />
        <CardList />
      </div>
    </main>
  );
}

export default Main;
