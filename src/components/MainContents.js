import { TITLE, DESCRIPTION } from '../utils/constants';
import linkImg from '../assets/link.png';
import manageImg from '../assets/manage.png';
import shareImg from '../assets/share.png';
import searchImg from '../assets/search.png';
import './MainContents.css';

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
