import './Shared.css';
import { useEffect, useState } from 'react';
import { CardList } from '../Card';
import { IconSearch } from '../Icon';
import { getFolder } from '../../api';

const LIMIT = 9;

function Shared() {
  const [folderInfo, setFolderInfo] = useState({});
  const [owner, setOwner] = useState({});
  const [items, setItems] = useState([]);
  // const [orderType, setOrderType] = useState('createdAt');
  // const itemsSorted = items.sort((a, b) => b[orderType] - a[orderType]);

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
        <div className="search-box">
          <IconSearch />
          <input
            className="search-box__input"
            name="search"
            placeholder="링크를 검색해 보세요."
          />
        </div>
      </header>
      <CardList items={items} />
    </div>
  );
}

export default Shared;
