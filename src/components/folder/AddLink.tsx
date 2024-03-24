import { useEffect, useState } from "react";
import link from "../../images/link.png";
import AddModal from "../modals/AddModal";
import "./AddLink.css";
import { GetFolderList } from "../../api";

function AddLink({ setDomNode }: { setDomNode: any }) {
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [folderListData, setFolderListData] = useState<any[]>([]);

  useEffect(() => {
    const GetMyFolderList = async () => {
      const result = await GetFolderList();
      const { data } = result;
      setFolderListData(data);
    };
    try {
      GetMyFolderList();
      setDomNode(document.querySelector(".add-link-input-form"));
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
        <img className="link-image" src={link} alt="link" />
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
