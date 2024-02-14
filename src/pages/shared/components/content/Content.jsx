import SearchBar from "../search-bar/SearchBar";
import * as S from "./Content.style";
import ContentCard from "./ContentCard";

const Content = ({ folderLinks }) => {
  return (
    <div>
      <S.Container>
        <SearchBar />
        <div className="card-box">
          {folderLinks.map((link) => (
            <ContentCard key={link.id} link={link} />
          ))}
        </div>
      </S.Container>
    </div>
  );
};

export default Content;
