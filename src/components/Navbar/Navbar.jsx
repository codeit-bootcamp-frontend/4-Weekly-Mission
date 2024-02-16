import * as S from './Navbar.styles';
const Navbar = ({ items }) => {
  console.log(items);
  return (
    <S.NavbarLayout>
      {items.map(item => (
        <S.NavbarItemBox key={item.id}>{item.name}</S.NavbarItemBox>
      ))}
    </S.NavbarLayout>
  );
};

export default Navbar;
