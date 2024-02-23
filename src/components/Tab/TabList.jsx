import * as S from './styles/TabList.styled';
import Tab from './Tab';

function TabList({ items, activeId, onSelect }) {
  const handleSelect = (item) => {
    onSelect(item);
  };

  return (
    <S.List>
      <Tab item={{}} active={!activeId} onSelect={handleSelect}>
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
