import DefalutCardImg from '../../assets/default-card.svg';
import StarIcon from './StarIcon';
import CardContent from './CardContent';

function CardListItem({ url, imgSrc, option, ...cardProps}) {
  const cardContentProps = {
    ...cardProps,
    option
  }
  return (
    <a href={url} className='content__card'>
      {option &&<StarIcon />}
      <figure
      style={{
        background: imgSrc ? "#ffffff" : `#DDDFFF url(${DefalutCardImg}) no-repeat center`,
      }}
      className='content__imgBox'
    >
      {imgSrc && <img className='content__img' src={imgSrc} alt='카드 이미지'/>}
    </figure>
      <CardContent {...cardContentProps}  />
    </a>
  );
}

export default CardListItem;
