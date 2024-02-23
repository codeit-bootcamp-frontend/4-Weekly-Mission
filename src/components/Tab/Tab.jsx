import * as S from './styles/Tab.styled';

function Tab({ children, item, active = false, onSelect }) {
  const handleClick = onSelect ? () => onSelect(item) : undefined;

  return (
    <S.StyledTab $active={active} onClick={handleClick}>
      {children}
    </S.StyledTab>
  );
}

export default Tab;
