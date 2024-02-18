import { getFolder } from '../../api';
import { CardList } from '../../components/Card';
import { IconSearch } from '../../components/Icon';
import SearchBox from '../../components/SearchBox/SearchBox';
import './SharedPage.css';
import { useEffect, useState } from 'react';

const LIMIT = 9;

function SharedPage() {
  const [folderInfo, setFolderInfo] = useState({});
  const [owner, setOwner] = useState({});
  const [items, setItems] = useState([]);

  const handleLoad = async (options) => {
    try {
      const { folder } = await getFolder(options);
      const { id, name, owner, links } = folder;
      setFolderInfo({ id, name });
      setOwner(owner);
      setItems(links);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad({ limit: LIMIT });
  }, []);

  return (
    <div className="shared">
      <SharedHeader folderInfo={folderInfo} owner={owner} />
      <SharedContent items={items} />
    </div>
  );
}

function SharedHeader({ folderInfo, owner }) {
  return (
    <header className="shared-header">
      <div className="profile">
        <div className="profile__image__container">
          <img
            className="profile__image"
            src={owner.profileImageSource}
            alt={owner.name}
          />
        </div>
        <div className="profile__title">@{owner.name}</div>
      </div>
      <div className="shared-header__title">{folderInfo.name}</div>
    </header>
  );
}

function SharedContent({ items = [] }) {
  return (
    <div className="shared-content">
      <header className="shared-content__header">
        <SearchBox type="text" placeholder="링크를 검색해 보세요." />
      </header>
      <CardList items={items} />
    </div>
  );
}

export default SharedPage;
