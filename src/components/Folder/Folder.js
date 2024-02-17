import { useGetFolderById } from "../../hooks/useGetFolder";
import SearchBar from "../SearchBar/SearchBar";
import "./Folder.css";

function Folder() {
  const { data } = useGetFolderById();
  const dataArray = data?.data;

  let renderedButtons;

  if (dataArray && Array.isArray(dataArray)) {
    renderedButtons = dataArray.map((item) => (
      <button key={item.id}>{item.name}</button>
    ));
  }

  return (
    <div className="Folder">
      <div className="Folder-items">
        <SearchBar />
        <div className="Folder-lists-container">
          <div className="Folder-lists">
            <button>전체</button>
            {renderedButtons}
          </div>
          <div className="Folder-add">
            <span className="Folder-add-text">폴더 추가</span>
            <img
              className="Folder-add-image"
              src="images/add.svg"
              alt="폴더 추가 이미지"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folder;
