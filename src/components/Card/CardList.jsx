import getTimeDiff from '../../utils/getTimeDiff';
import getCoustomDate from '../../utils/getCoustomDate';
import StarIcon from '../../assets/star.svg';
import KebabIcon from '../../assets/kebab.svg';
import CardDefaultIcon from '../../assets/default-card.svg';
import * as Styled from './CardList.styled';

function CardList({ handleKebabClick, selectCardId, linkList, option, handleModalAction }) {
  const handleKebabModalAction = (action, subTitle, e) => {
    e.preventDefault();
    handleModalAction(action, subTitle);
  };

  const handleKebabIconClick = (e, id) => {
    e.preventDefault();
    handleKebabClick(id);
  };

  return (
    <Styled.CardBox>
      {linkList?.length ? (
        linkList.map((link) => {
          const { id, createdAt, created_at, imageSource, image_source, description, url } = link;
          const imgSrc = imageSource ?? image_source;
          const linkCreated = createdAt ?? created_at;
          const createDate = new Date(linkCreated);
          const timeDiffText = getTimeDiff(linkCreated);
          const coustomDate = getCoustomDate(createDate);
          return (
            <Styled.Card key={id} href={url}>
              {option && <Styled.StarIcon src={StarIcon} alt='별 아이콘' />}
              <Styled.CardImgBox $imgSrc={imgSrc} icon={CardDefaultIcon}>
                <Styled.CardImg src={imgSrc} alt='카드 이미지' />
              </Styled.CardImgBox>
              <Styled.CardInfo>
                {option ? (
                  <Styled.CardInfoHeader>
                    <Styled.CardTimeDiff>{timeDiffText}</Styled.CardTimeDiff>
                    <img
                      onClick={(e) => handleKebabIconClick(e, id)}
                      className='content__kebab'
                      src={KebabIcon}
                      alt='케밥 아이콘'
                    />
                    {selectCardId === id && (
                      <Styled.KebabListBox>
                        <Styled.KebabList onClick={(e) => handleKebabModalAction('링크 삭제', url, e)}>
                          삭제하기
                        </Styled.KebabList>
                        <Styled.KebabList onClick={(e) => handleKebabModalAction('폴더에 추가', url, e)}>
                          폴더에 추가
                        </Styled.KebabList>
                      </Styled.KebabListBox>
                    )}
                  </Styled.CardInfoHeader>
                ) : (
                  <Styled.CardTimeDiff>{timeDiffText}</Styled.CardTimeDiff>
                )}
                <Styled.CardText>{description}</Styled.CardText>
                <Styled.CardDate>{coustomDate}</Styled.CardDate>
              </Styled.CardInfo>
            </Styled.Card>
          );
        })
      ) : (
        <Styled.CardListEmpty>저장된 링크가 없습니다</Styled.CardListEmpty>
      )}
    </Styled.CardBox>
  );
}

export default CardList;
