import '../styles/FolderSection.css';
import LinkCard from './LinkCard';

function FolderSection({ folderList }) {
  // console.log(folderList);
  // console.log(folderList.map(({id, createdAt, url}) => console.log(id, createdAt, url)));
  return (
    <section className='section-area'>
      <div className="search-bar"></div>
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
