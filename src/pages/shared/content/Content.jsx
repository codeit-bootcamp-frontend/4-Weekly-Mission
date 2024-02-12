import SearchBar from "../search-bar/SearchBar.jsx";
import ContentCard from "./ContentCard.jsx";
import "./Content.css"

const Content = ({ folderLinks }) => {
  return (
    <div className="container">
        <SearchBar />
        <div className="card-box">
          {folderLinks?.map((link) => (
            <ContentCard key={link.id} link={link} />
          ))}
        </div>
    </div>
  );
};

export default Content;