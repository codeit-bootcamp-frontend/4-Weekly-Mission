import searchBar from "../../assets/searchBar.svg";
import "../../style/landing.css";
import { MainSection } from "./MainSection";
import SearchBar from "./SearchBar";

const SEARCH_BAR_IMAGE = searchBar;

export function BodySection({ data }) {
  return (
    <div className="login-mainpage-body-section">
      <p></p>
      <SearchBar />
      <MainSection data={data} />
    </div>
  );
}

export default BodySection;
