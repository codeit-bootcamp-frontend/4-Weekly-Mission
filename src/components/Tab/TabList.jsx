import * as S from './styles/TabList.styled';
import Tab from './Tab';

function TabList({ items }) {
  return (
    <S.List>
      {items?.map((item) => (
        <Tab>{item}</Tab>
      ))}
    </S.List>
  );
}

export default TabList;
