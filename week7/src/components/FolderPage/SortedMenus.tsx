import "./SortedMenus.css";
import { ALL_MENU_URL, LinkAddModal } from "../../FolderPage";
import { useMediaQuery } from "react-responsive";
import { AllMenuData, SortedMenusData } from "../../hooks/useFetch";

interface ButtonProps {
  menuId?: number | undefined;
  onClickSubMenu: (id: number | undefined) => void;
  menu?: SortedMenusData;
  onChangeUrl: (url: string) => void;
  onChangeTitle: (title: string) => void;
}
const Button = ({
  menuId,
  onClickSubMenu: handleChangeId,
  menu,
  onChangeUrl,
  onChangeTitle: handleChangeTitle,
}: ButtonProps) => {
  const clickNotAllMenus = (id: number | undefined) => {
    console.log(id);
    handleChangeId(id);
    onChangeUrl(
      `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${id}`
    );
    if (menu) {
      handleChangeTitle(menu.name);
    }
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

interface SortedMenusProps {
  menusData: SortedMenusData[] | undefined;
  onClickSubMenu: (id: number | undefined) => void;
  allMenuData: AllMenuData[] | undefined;
  onChangeUrl: (url: string) => void;
  onChangeTitle: (name: string) => void;
  isShowModal: (linkAddModal: LinkAddModal) => void;
}
function SortedMenus({
  menusData,
  onClickSubMenu,
  allMenuData,
  onChangeUrl,
  onChangeTitle,
  isShowModal,
}: SortedMenusProps) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1124 });
  const menusDataArray = menusData || [];

  const showFolderAddModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    isShowModal({ linkModal: false, folderAddModal: true });
  };

  return (
    <nav className={isTablet ? "sortedMenu-nav-tablet" : "sortedMenu-nav"}>
      <div className={isTablet ? "sortedMenu-bar-tablet" : "sortedMenu-bar"}>
        <div className="sortedMenus">
          <Button
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
