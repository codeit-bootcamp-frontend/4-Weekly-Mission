import SearchBar from '../search-bar/SearchBar.jsx';
import ContentCard from './ContentCard.jsx';
import * as S from './Content.style.js';

const Content = ({ folderLinks }) => {
  return (
    <S.ContentContainer>
      <SearchBar />
      <div className="card-box">
        {folderLinks?.map((link) => (
          <ContentCard key={link.id} link={link} />
        ))}
      </div>
    </S.ContentContainer>
  );
};

export default Content;
