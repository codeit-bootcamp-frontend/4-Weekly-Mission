// import CardListItem from './CardListItem';
import getTimeDiff from '../../utils/getTimeDiff';
import getCoustomDate from '../../utils/getCoustomDate';
import StarImg from '../../assets/star.svg';
import KebabIcon from '../../assets/kebab.svg';

function CardList({ handleKebabClick, selectCardId, linkList, option, handleModalAction }) {
  const handleKebabModalAction = (action, subTitle, e) => {
    e.preventDefault();
    handleModalAction(action, subTitle)
  }

  const handleKebabIconClick = (e, id) => {
    e.preventDefault();
    handleKebabClick(id);
  }

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
          return(
            <a key={id} href={url} className='content__card'>
      {option && <img className='content__star' src={StarImg} alt='별 아이콘' />}
      <figure className={ imgSrc ? "content__imgBox" : "content__imgBox--default"}>
      {imgSrc && <img className='content__img' src={imgSrc} alt='카드 이미지'/>}
    </figure>
    <div className='content__info'>
      {option ? 
    (<div className='content__box'>
      <div className='content__timediff'>{timeDiffText}</div>
      <img
        onClick={(e) => handleKebabIconClick(e, id)}
        className='content__kebab'
        src={KebabIcon}
        alt='케밥 아이콘'/>
      {selectCardId === id && <ul className='kebab__lists'>
        <li onClick={(e) => handleKebabModalAction('링크 삭제', url, e)} className='kebab__list'>
          삭제하기
        </li>
        <li onClick={(e) => handleKebabModalAction('폴더에 추가', url, e)} className='kebab__list'>
          폴더에 추가
        </li>
      </ul>}
    </div>)
     : 
    (<div className='content__timediff'>{timeDiffText}</div>)}
      <div className='content__text'>{description}</div>
      <div className='content__date'>{coustomDate}</div>
    </div>
    </a>
          );
        })
      ) : (
        <div className='content__blank'>저장된 링크가 없습니다</div>
      )}
    </div>
  );
}

export default CardList;
