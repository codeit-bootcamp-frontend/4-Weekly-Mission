import SearchBar from "../../../../components/search-bar/SearchBar";
import * as S from "./Content.style";
import ContentCard from "../../../../components/card/Card";

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
