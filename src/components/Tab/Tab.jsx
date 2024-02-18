import * as S from './styles/Tab.styled';

function Tab({ children, props }) {
  return <S.StyledTab {...props}>{children}</S.StyledTab>;
}

export default Tab;
