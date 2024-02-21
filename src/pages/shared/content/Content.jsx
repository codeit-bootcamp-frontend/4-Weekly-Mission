import SearchBar from '../../../components/ui/search-bar/SearchBar.jsx';
import Card from '../../../components/ui/card/Card.jsx';
import * as S from './Content.style.js';

const Content = ({ sampleFolderLink }) => {
  return (
    <S.Container>
      <SearchBar />
      <S.CardContainer>
        {sampleFolderLink?.map((link) => (
          <Card key={link.id} link={link} />
        ))}
      </S.CardContainer>
    </S.Container>
  );
};

export default Content;
