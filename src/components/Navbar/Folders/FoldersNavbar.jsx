import { FiPlus } from 'react-icons/fi';

import * as S from './FoldersNavbar.styles';

const FoldersNavbar = ({ items, selectedItem, setSelectedItem }) => {
  return (
    <S.FoldersNavbarLayout>
      <S.FoldersNavbarItemsBox>
        {items.map(item => (
          <li key={item.id}>
            <S.FoldersNavbarItemBox
              onClick={() => setSelectedItem && setSelectedItem({ id: item.id, name: item.name })}
              id={item.id}
              $isSelected={selectedItem?.id === item.id}>
              {item.name}
            </S.FoldersNavbarItemBox>
          </li>
        ))}
      </S.FoldersNavbarItemsBox>
      <S.FoldersNavbarAddButton>
        <span>폴더 추가</span> <FiPlus />
      </S.FoldersNavbarAddButton>
    </S.FoldersNavbarLayout>
  );
};

export default FoldersNavbar;
