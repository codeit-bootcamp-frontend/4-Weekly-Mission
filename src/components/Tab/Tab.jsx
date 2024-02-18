import * as S from './styles/Tab.styled';

function Tab({ children, tabId, active = false, onClick }) {
  const handleClick = onClick ? () => onClick(tabId) : undefined;

  return (
    <S.StyledTab $active={active} onClick={handleClick}>
      {children}
    </S.StyledTab>
  );
}

export default Tab;
