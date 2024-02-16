import * as S from './Navbar.styles';
const Navbar = ({ items, selectedItem, setSelectedItem }) => {
  return (
    <S.NavbarLayout>
      {items.map(item => (
        <li key={item.id}>
          <S.NavbarItemBox
            onClick={() => setSelectedItem({ id: item.id, name: item.name })}
            id={item.id}
            $isSelected={selectedItem.id === item.id}>
            {item.name}
          </S.NavbarItemBox>
        </li>
      ))}
    </S.NavbarLayout>
  );
};

export default Navbar;
