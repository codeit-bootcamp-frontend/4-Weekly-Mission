import { CardItem } from '@src/components/Card/Card';
import { getFolder } from '../../api';
import { CardList } from '../../components/Card';
import SearchBox from '../../components/SearchBox/SearchBox';
import './SharedPage.css';
import { useEffect, useState } from 'react';

interface FolderInfo {
  id: string;
  name: string;
}

interface Owner {
  id: string;
  name: string;
  profileImageSource: string;
}

function SharedPage() {
  const [folderInfo, setFolderInfo] = useState<FolderInfo | null>(null);
  const [owner, setOwner] = useState<Owner | null>(null);
  const [items, setItems] = useState<CardItem[]>([]);

  const handleLoad = async () => {
    try {
      const { folder } = await getFolder();
      const { id, name, owner, links } = folder;
      setFolderInfo({ id, name });
      setOwner(owner);
      setItems(links);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  if (!folderInfo || !owner) {
    return null;
  }

  return (
    <div className="shared">
      <SharedHeader folderInfo={folderInfo} owner={owner} />
      <SharedContent items={items} />
    </div>
  );
}

interface SharedHeaderProps {
  folderInfo: FolderInfo;
  owner: Owner;
}

function SharedHeader({ folderInfo, owner }: SharedHeaderProps) {
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

interface SharedContentProps {
  items: CardItem[];
}

function SharedContent({ items = [] }: SharedContentProps) {
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
