import StarImg from '../../assets/star.svg';
import KebabIcon from '../../assets/kebab.svg';

function CardListItem({ url, imgSrc, option, description, date, id, timeDiff, selectCardId, handleKebabClick, setModalAction}) {
  const handleModalAction = (action, e) => {
    e.preventDefault();
    setModalAction({
      isView: true,
      action,
      subTitle: url,
    });
  }

  const handleKebabIconClick = (e) => {
    e.preventDefault();
    handleKebabClick(id);
  }

  return (
    <a href={url} className='content__card'>
      {option && <img className='content__star' src={StarImg} alt='별 아이콘' />}
      <figure className={ imgSrc ? "content__imgBox" : "content__imgBox--default"}>
      {imgSrc && <img className='content__img' src={imgSrc} alt='카드 이미지'/>}
    </figure>
    <div className='content__info'>
      {option ? 
    (<div className='content__box'>
      <div className='content__timediff'>{timeDiff}</div>
      <img
        onClick={(e) => handleKebabIconClick(e)}
        className='content__kebab'
        src={KebabIcon}
        alt='케밥 아이콘'
      />
      {selectCardId === id && <ul className='kebab__lists'>
        <li onClick={(e) => handleModalAction('링크 삭제', e)} className='kebab__list'>
          삭제하기
        </li>
        <li onClick={(e) => handleModalAction('폴더에 추가', e)} className='kebab__list'>
          폴더에 추가
        </li>
      </ul>}
    </div>)
     : 
    (<div className='content__timediff'>{timeDiff}</div>)}
      <div className='content__text'>{description}</div>
      <div className='content__date'>{date}</div>
    </div>
    </a>
  );
}

export default CardListItem;
