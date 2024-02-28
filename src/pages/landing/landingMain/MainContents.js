import linkImg from '../../../assets/link.png';
import manageImg from '../../../assets/manage.png';
import shareImg from '../../../assets/share.png';
import searchImg from '../../../assets/search.png';
import './MainContents.css';

const TITLE = {
  TITLE_LINK: () => (
    <h2 className='content-title'>
      <span className='gradient-link'>원하는 링크</span>를 저장하세요
    </h2>
  ),
  TITLE_MANAGE: () => (
    <h2 className='content-title'>
      링크를 폴더로<span className='gradient-manage'>관리</span>하세요
    </h2>
  ),
  TITLE_SHARE: () => (
    <h2 className='content-title'>
      저장한 링크를<span className='gradient-share'>공유</span>해 보세요
    </h2>
  ),
  TITLE_SEARCH: () => (
    <h2 className='content-title'>
      저장한 링크를<span className='gradient-search'>검색</span>해 보세요
    </h2>
  ),
};

const DESCRIPTION = {
  DESCRIPTION_LINK: () => (
    <p className='content-text'>
      나중에 읽고 싶은 글, 다시 보고 싶은 영상,
      <br className='pc-br tablet-br' />
      사고 싶은 옷, 기억하고 싶은 모든 것을
      <br className='pc-br tablet-br' />한 공간에 저장하세요.
    </p>
  ),
  DESCRIPTION_MANAGE: () => (
    <p className='content-text'>
      나만의 폴더를 무제한으로 만들고
      <br className='pc-br tablet-br' />
      다양하게 활용할 수 있습니다.
    </p>
  ),
  DESCRIPTION_SHARE: () => (
    <p className='content-text'>
      여러 링크를 폴더에 담고 공유할 수<br className='tablet-br' /> 있습니다.
      <br className='pc-br' />
      가족, 친구, 동료들에게 쉽고
      <br className='tablet-br' /> 빠르게 링크를
      <br className='pc-br' />
      공유해 보세요.
    </p>
  ),
  DESCRIPTION_SEARCH: () => (
    <p className='content-text'>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
  ),
};

const MainContents = () => {
  const contents = [
    {
      title: TITLE.TITLE_LINK(),
      description: DESCRIPTION.DESCRIPTION_LINK(),
      imgSrc: linkImg,
      altText: 'linkImg',
    },
    {
      title: TITLE.TITLE_MANAGE(),
      description: DESCRIPTION.DESCRIPTION_MANAGE(),
      imgSrc: manageImg,
      altText: 'manageImg',
    },
    {
      title: TITLE.TITLE_SHARE(),
      description: DESCRIPTION.DESCRIPTION_SHARE(),
      imgSrc: shareImg,
      altText: 'shareImg',
    },
    {
      title: TITLE.TITLE_SEARCH(),
      description: DESCRIPTION.DESCRIPTION_SEARCH(),
      imgSrc: searchImg,
      altText: 'searchImg',
    },
  ];

  return (
    <section className='section-landing'>
      {contents.map((content, index) => (
        <div
          className={'content ' + (index % 2 !== 0 ? 'odd-grid' : 'even-grid')}
          key={index}
        >
          {content.title}
          {content.description}
          <img
            className='content-img'
            src={content.imgSrc}
            alt={content.altText}
          />
        </div>
      ))}
    </section>
  );
};

export default MainContents;
