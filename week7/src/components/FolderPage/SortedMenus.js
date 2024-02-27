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
    console.log(id);
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
    <button className="menuBtn" onClick={() => clickNotAllMenus(menuId)}>
      {menu.name}
    </button>
  ) : (
    <button className="menuBtn" onClick={() => clickAllMenu()}>
      전체
    </button>
  );
};

function SortedMenus({
  menusData,
  onClickSubMenu,
  allMenuData,
  onChangeUrl,
  onChangeTitle,
  isShowModal,
}) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1124 });
  const menusDataArray = menusData || [];

  const showFolderAddModal = (e) => {
    e.preventDefault();
    isShowModal((prev) => ({ linkModal: false, folderAddModal: true }));
  };

  return (
    <nav className={isTablet ? "sortedMenu-nav-tablet" : "sortedMenu-nav"}>
      <div className={isTablet ? "sortedMenu-bar-tablet" : "sortedMenu-bar"}>
        <div className="sortedMenus">
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
        {!isMobile ? (
          <div className="add-folder-btn-box">
            <span>
              <a
                className="add-folder-btn"
                href="/"
                onClick={showFolderAddModal}
              >
                폴더 추가 +
              </a>
            </span>
          </div>
        ) : (
          <button className="add-folder-mobile-btn">폴더 추가 +</button>
        )}
      </div>
    </nav>
  );
}
export default SortedMenus;
