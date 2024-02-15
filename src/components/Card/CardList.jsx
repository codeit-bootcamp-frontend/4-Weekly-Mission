import CardListItem from './CardListItem';
import getTimeDiff from '../../utils/getTimeDiff';
import getCoustomDate from '../../utils/getCoustomDate';

function CardList({ handleKebabClick, selectCardId, linkList, option, setModalAction }) {
  return (
    <div className='content__cards'>
      {linkList?.length ? (
        linkList.map((link) => {
          const { id, createdAt, created_at, imageSource, image_source, description, url } = link;
          const imgSrc = imageSource ?? image_source;
          const linkCreated = createdAt ?? created_at;
          const createDate = new Date(linkCreated);
          const timeDiffText = getTimeDiff(linkCreated);
          const coustomDate = getCoustomDate(createDate);
          const cardListItemProps = {
            id, // 링크 ID
            date: coustomDate, // 작성일
            url, // 링크 url(클릭 시 이동)
            imgSrc, // 이미지 url
            timeDiff: timeDiffText, // 작성일과 현재 시간의 차이
            description, // 링크 본문
            option, // true일 경우 케밥 아이콘, 별 아이콘 보여짐, false일 경우 안보임
            handleKebabClick, // 케밥 리스트 팝오버 함수(매개변수 - 링크ID)
            selectCardId, // 현재 어떤 id의 케밥 리스트가 팝오버가 될 지
            setModalAction,
          };
          return <CardListItem key={id} {...cardListItemProps}></CardListItem>;
        })
      ) : (
        <div className='content__blank'>저장된 링크가 없습니다</div>
      )}
    </div>
  );
}

export default CardList;
