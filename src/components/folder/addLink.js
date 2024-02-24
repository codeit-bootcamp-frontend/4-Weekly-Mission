import { useFolder } from "../../hooks/useFolder";
import LINK_LOGO from "../../assets/image/link.svg";
import "./folderInfo.css";
import "./addLink.css";
import CustomModal from '../modal/Modal'
import { useState } from "react";
import { FolderAddStyle } from "../modal/folderaddstyle";

export const AddLink = () => {
  const [open , setOpen] = useState(false)
  return (
    <div className="infoContainer">
      <div className="linkFlexBox">
        <div className="linkAddInputBox">
          <div className="linkAddInputFlexBox">
            <img src={LINK_LOGO} />
            <input placeholder="링크를 추가해보세요" />
          </div>
          <button className="addButton" onClick={()=> setOpen(!open)}>추가하기</button>
        </div>
        <CustomModal isOpen={open} onClose={()=>setOpen(false)}>
          <FolderAddStyle/>
        </CustomModal>
      </div>
    </div>
  );
};
