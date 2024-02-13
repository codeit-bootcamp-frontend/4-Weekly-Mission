import Card from './Card';
import * as S from '../../styles/Cards.styles';

const Cards = ({ links }) => {
  return (
    <S.CardsSection>
      {links.map(link => {
        const { createdAt, url, title, description, imageSource } = link;
        return (
          <Card
            key={link.id}
            createdAt={createdAt}
            url={url}
            title={title}
            description={description}
            imageURL={imageSource}
          />
        );
      })}
    </S.CardsSection>
  );
};

export default Cards;
