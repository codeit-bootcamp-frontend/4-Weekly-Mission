import { useEffect, useState } from "react";
import link from "../../images/link.png";
import AddModal from "../modals/AddModal";
import "./AddLink.css";
import { GetFolderList } from "../../api/api";

function AddLink() {
  const [modalOn, setModalOn] = useState(false);
  const [folderListData, setFolderListData] = useState([]);
  useEffect(() => {
    const GetMyFolderList = async () => {
      const result = await GetFolderList();
      const { data } = result;
      setFolderListData(data);
    };
    try {
      GetMyFolderList();
    } catch (err) {
      console.log(err);
    }
  }, []);
  function handleModalOff() {
    setModalOn(false);
  }

  return (
    <>
      <div className="add-link-input-form">
        <img className="link-image" src={link} />
        <input className="add-link-input" placeholder="링크를 추가해 보세요" />

        <button onClick={() => setModalOn(true)} className="btn cta add-button">
          추가하기
        </button>
      </div>
      {modalOn && (
        <AddModal
          purpose={"폴더에 추가"}
          url={""}
          handleModalOff={handleModalOff}
          folderListData={folderListData}
        />
      )}
    </>
  );
}
export default AddLink;
