import '../styles/FolderSection.css';
import { useEffect, useState } from 'react';
import { getSampleFolder } from '../util/api';
import search from '../assets/search.svg';
import LinkCard from './LinkCard';
import UserFolderNameArea from './UserFolderNameArea';

function SharedPage() {
  const [folderName, setFolderName] = useState('');
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [folderList, setFolderList] = useState([]);

  const handleFolderLoad = async () => {
    try {
      const {
        folder: { name, owner, links },
      } = await getSampleFolder();

      setFolderName(name);
      setUserName(owner.name);
      setProfileImage(owner.profileImageSource);
      setFolderList(links);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    handleFolderLoad();
  }, []);

  return (
    <>
      <UserFolderNameArea folderName={folderName} userName={userName} imgSrc={profileImage} />
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
    </>
  );
}

export default SharedPage;
