import "./SortedMenus.css";
import { ALL_MENU_URL } from "../../FolderPage.js";
import { useMediaQuery } from "react-responsive";

const Button = ({
  menuId,
  onClickSubMenu: handleChangeId,
  menu,
  onChangeUrl,
  onChangeTitle: handleChangeTitle,
}) => {
  const clickNotAllMenus = (id) => {
    handleChangeId(() => id);
    onChangeUrl(
      `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${id}`
    );
    handleChangeTitle(menu.name);
  };

  const clickAllMenu = () => {
    onChangeUrl(ALL_MENU_URL);
    handleChangeTitle("전체");
  };
  return menu ? (
    <button onClick={() => clickNotAllMenus(menuId)}>{menu.name}</button>
  ) : (
    <button onClick={() => clickAllMenu()}>전체</button>
  );
};

function SortedMenus({
  menusData,
  onClickSubMenu,
  allMenuData,
  onChangeUrl,
  onChangeTitle,
}) {
  const isTablet = useMediaQuery({ maxWidth: 1124 });
  const menusDataArray = menusData || [];

  return (
    <nav className={isTablet ? "sortedMenu-nav-tablet" : "sortedMenu-nav"}>
      <div>
        <Button
          data={allMenuData}
          onClickSubMenu={onClickSubMenu}
          onChangeUrl={onChangeUrl}
          onChangeTitle={onChangeTitle}
        />

        {menusDataArray.map((menu) => {
          return (
            <Button
              key={menu.id}
              menuId={menu.id}
              menu={menu}
              onClickSubMenu={onClickSubMenu}
              onChangeUrl={onChangeUrl}
              onChangeTitle={onChangeTitle}
            />
          );
        })}
      </div>
    </nav>
  );
}
export default SortedMenus;
