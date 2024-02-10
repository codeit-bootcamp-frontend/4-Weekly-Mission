import '../styles/FolderSection.css';
import search from '../assets/search.svg';
import LinkCard from './LinkCard';

function FolderSection({ folderList }) {
  return (
    <section className="section-area">
      <div className="search-bar-group">
        <img src={search} alt="돋보기 아이콘" className="icon-search" />
        <input type="text" className="input-search" placeholder="링크를 검색해 보세요." />
      </div>
      <ul className="card-list">
        {folderList.map(({ id, createdAt, url, description, imageSource }) => (
          <li key={id} className="card-item">
            <LinkCard url={url} createdAt={createdAt} desc={description} imgUrl={imageSource} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FolderSection;
