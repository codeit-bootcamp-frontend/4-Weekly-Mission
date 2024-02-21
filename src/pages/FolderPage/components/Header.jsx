import { useState } from "react";
import style from "./header.module.css";
import FolderModal from "components/Modal/FolderModal/FolderModal";
import linkIcon from "assets/images/ic_link.svg";

function Header({ list }) {
  const [value, setValue] = useState("");
  const [modals, setModals] = useState({});

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const openModal = (e, modal) => {
    e.preventDefault();
    setModals((prevModals) => ({
      ...prevModals,
      [modal]: true,
    }));
  };

  return (
    <div className={style.container}>
      <form className={style.form}>
        <img src={linkIcon} className={style.icon} alt="링크 아이콘" />
        <input
          value={value}
          className={style.input}
          type="text"
          placeholder="링크를 추가해 보세요"
          onChange={handleChange}
        />
        <button
          className={style.button}
          onClick={(e) => {
            openModal(e, "add-link");
          }}
        >
          추가하기
        </button>
        {modals["add-link"] && (
          <FolderModal
            variant={`add-link`}
            setModals={setModals}
            link={value}
            list={list}
          />
        )}
      </form>
    </div>
  );
}

export default Header;
