import "./FolderLinkAddBar.css";
import { ChangeEvent, useRef, useState } from "react";

export default function FolderLinkAddBar({ handleSubmit, subFolderList }: any) {
  const [inputValue, setInputValue] = useState("");
  const addLInkInputRef = useRef("");

  const handleLinkAdd: any = (e: ChangeEvent) => {
    e.preventDefault();
    handleSubmit("addLinkToFolder", [inputValue || "", subFolderList]);
  };

  return (
    <div className="background-decoration-color">
      <form onSubmit={handleLinkAdd} className="input-position-origin link-add">
        <label htmlFor="add-link" />
        <input id="add-link" placeholder="링크를 추가해 보세요." />
        <button className="link-add-btn default-btn">추가하기</button>
      </form>
    </div>
  );
}
