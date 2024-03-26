import "./AddLink.css";
import { RefObject } from "react";

const AddLink = ({
  addLinkRef,
  isAddLinkFixed = false,
}: {
  addLinkRef?: RefObject<HTMLDivElement>;
  isAddLinkFixed?: boolean;
}) => {
  const addLinkClass = isAddLinkFixed ? "AddLinkFixed" : "";

  return (
    <div className={"AddLink " + addLinkClass} ref={addLinkRef}>
      <div className="AddLink-items">
        <input className="AddLink-input" placeholder="링크를 추가하세요" />
        <img className="AddLink-icon" src="images/link.svg" alt="링크 아이콘" />
        <button className="AddLink-button">추가하기</button>
      </div>
    </div>
  );
};

export default AddLink;
