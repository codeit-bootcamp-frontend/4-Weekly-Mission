import { UserFolder } from '@src/pages/Folder/FolderPage';
import * as S from './styles/TabList.styled';
import Tab from './Tab';

interface TabListProps {
  items: UserFolder[];
  activeId: number | null;
  onSelect: (value: UserFolder | null) => void;
}

function TabList({ items, activeId, onSelect }: TabListProps) {
  const handleSelect = (item: UserFolder | null) => {
    onSelect(item);
  };

  return (
    <S.List>
      <Tab item={null} active={!activeId} onSelect={handleSelect}>
        전체
      </Tab>
      {items?.map((item) => {
        return (
          <Tab
            key={item.id}
            item={item}
            active={item.id === activeId}
            onSelect={handleSelect}
          >
            {item.name}
          </Tab>
        );
      })}
    </S.List>
  );
}

export default TabList;
