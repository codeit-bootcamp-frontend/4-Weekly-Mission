import { ReactNode } from 'react';
import * as S from './styles/Tab.styled';
import { UserFolder } from '@src/pages/Folder/FolderPage';

interface TabProps {
  children: ReactNode;
  item: UserFolder | null;
  active: boolean;
  onSelect: (item: UserFolder | null) => void;
}

function Tab({ children, item, active = false, onSelect }: TabProps) {
  const handleClick = onSelect ? () => onSelect(item) : undefined;

  return (
    <S.StyledTab $active={active} onClick={handleClick}>
      {children}
    </S.StyledTab>
  );
}

export default Tab;
