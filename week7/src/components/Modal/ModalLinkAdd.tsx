import "./ModalAdd.css";
import { FolderCardData, SortedMenusData } from "../../hooks/useFetch";

interface ModalLinkAddProps {
  folderData: FolderCardData[] | undefined;
  folderMenus: SortedMenusData[] | undefined;
}
const ModalLinkAdd = ({ folderData, folderMenus }: ModalLinkAddProps) => {
  const menusDataArray = folderMenus || [];
  const dataArray = folderData || [];
  return (
    <div className="modal-add-content">
      <div className="add-area">링크 주소</div>
      <div className="add-folder-list">
        {menusDataArray.map((menu) => (
          <div key={menu.id} className="add-folder-item">
            <p className="add-folder-name">{menu.name}</p>
            <p className="add-folder-link">{dataArray.length}개 링크</p>
          </div>
        ))}
      </div>
      <button className="add-button">추가하기</button>
    </div>
  );
};

export default ModalLinkAdd;
