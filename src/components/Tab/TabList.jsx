import { useState } from 'react';
import * as S from './styles/TabList.styled';
import Tab from './Tab';

function TabList({ items }) {
  const [activeId, setActiveId] = useState('');

  const handleClick = (tabId) => setActiveId(tabId);

  return (
    <S.List>
      <Tab tabId="" active={!activeId} onClick={handleClick}>
        전체
      </Tab>
      {items?.map((item) => (
        <Tab
          key={item.id}
          tabId={item.id}
          active={item.id === activeId}
          onClick={handleClick}
        >
          {item.name}
        </Tab>
      ))}
    </S.List>
  );
}

export default TabList;
