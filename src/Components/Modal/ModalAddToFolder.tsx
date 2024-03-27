import ModalContainer from "./ModalContainer";
import { useFolder } from "../../useHooks/useFolder";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedFolderName?: string;
}
const ModalAddToFolder = ({ isOpen, onClose, selectedFolderName }: Props) => {
  const { folder } = useFolder();

  const addFolderContent = (
    <>
      <h2 className="title">폴더에 추가</h2>
      <div className="menuLists">
        {folder &&
          folder.map((eachFolder) => (
            <div className="menuList">
              {eachFolder.name}
              <p>{eachFolder.link.count}개 링크</p>
            </div>
          ))}
      </div>
      <button className="blueButton">추가하기</button>
    </>
  );

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      children={addFolderContent}
    />
  );
};
export default ModalAddToFolder;
