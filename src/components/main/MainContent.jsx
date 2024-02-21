import MainTitle from './MainTitle';
import MainCardLink from '../../assets/main-card-link.webp';
import MainCardControl from '../../assets/main-card-control.webp';
import MainCardShare from '../../assets/main-card-share.webp';
import MainCardSearch from '../../assets/main-card-search.webp';
import MainCard from './MainCard';

const cardList = [
  {
    titleStyle: {
      background: 'linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%) text',
    },
    title: ['', '를 저장하세요'],
    effect: ' 원하는 링크',
    text: '나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고싶은 옷, 기억하고 싶은 모든 것을 한공간에 저장하세요',
    img: MainCardLink,
  },
  {
    titleStyle: {
      background: 'linear-gradient(277deg, #6fbaff 59.22%, #ffd88b 93.66%) text',
    },
    title: ['링크를 폴더로', '하세요'],
    effect: ' 관리',
    text: '나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.',
    img: MainCardControl,
  },
  {
    titleStyle: {
      background: 'linear-gradient(99deg, #6d7ccd 19.76%, rgba(82, 136, 133, 0.22) 52.69%) text',
    },
    title: ['저장한 링크를', '해 보세요'],
    effect: ' 공유',
    text: '여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.',
    img: MainCardShare,
  },
  {
    titleStyle: {
      background: 'linear-gradient(271deg, #fe578f -9.84%, #68e8f9 107.18%) text',
    },
    title: ['저장한 링크를', '해 보세요'],
    effect: ' 검색',
    text: '중요한 정보들을 검색으로 쉽게 찾아보세요.',
    img: MainCardSearch,
  },
];

function MainContent() {
  return (
    <>
      <MainTitle />
      {cardList.map((list, index) => {
        return <MainCard key={index} list={list} index={index} />;
      })}
    </>
  );
}

export default MainContent;
