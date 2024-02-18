import * as S from "./Content.style";

import SearchBar from "../../../shared/components/search-bar/SearchBar";
import ContentCard from "../../../shared/components/content/ContentCard";

const Content = ({ folder }) => {
  return (
    <S.Container>
      <SearchBar />
      {folder ? (
        <S.YesLink>
          <div className="card-box">
            {folder.map((link) => (
              <ContentCard key={link.id} link={link} />
            ))}
          </div>
        </S.YesLink>
      ) : (
        <S.NoLinks>저장된 링크가 없습니다</S.NoLinks>
      )}
    </S.Container>
  );
};

export default Content;
