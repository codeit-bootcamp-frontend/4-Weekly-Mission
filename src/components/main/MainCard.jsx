import TextEffect from './TextEffect';
import CardImg1 from '../../assets/card-img1.png';
import CardImg2 from '../../assets/card-img2.png';
import CardImg3 from '../../assets/card-img3.png';
import CardImg4 from '../../assets/card-img4.png';
function MainCard({ cardNumber }) {
  const cardNumberObj = {
    1: {
      title: ['', '를 저장하세요'],
      effect: ' 원하는 링크',
      text: '나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고싶은 옷, 기억하고 싶은 모든 것을 한공간에 저장하세요',
      img: CardImg1,
    },
    2: {
      title: ['링크를 폴더로', '하세요'],
      effect: ' 관리',
      text: '나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.',
      img: CardImg2,
    },
    3: {
      title: ['저장한 링크를', '해 보세요'],
      effect: ' 공유',
      text: '여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.',
      img: CardImg3,
    },
    4: {
      title: ['저장한 링크를', '해 보세요'],
      effect: ' 검색',
      text: '중요한 정보들을 검색으로 쉽게 찾아보세요.',
      img: CardImg4,
    },
  };

  return (
    <section className={`card c${cardNumber}`}>
      <div className='cardTitleBox'>
        <h2 className='cardTitle'>
          {cardNumberObj[cardNumber].title[0]}
          <TextEffect className={`card${cardNumber}TextEffect`} effectText={cardNumberObj[cardNumber].effect} />
          {cardNumberObj[cardNumber].title[1]}
        </h2>
        <p className='cardText'>{cardNumberObj[cardNumber].text}</p>
      </div>

      <figure className='cardBox'>
        <img src={cardNumberObj[cardNumber].img} alt={`카드 이미지${cardNumber}`} />
      </figure>

      <p className='cardText mobileCardText'>{cardNumberObj[cardNumber].text}</p>
    </section>
  );
}

export default MainCard;
