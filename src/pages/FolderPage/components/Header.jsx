import { useState } from "react";
import style from "./header.module.css";
import FolderModal from "components/Modal/FolderModal/FolderModal";
import linkIcon from "assets/images/ic_link.svg";
import useModal from "utils/hooks/useModal";
import { ADD_LINK } from "utils/constants/strings";

function Header({ list }) {
  const [value, setValue] = useState("");
  const { modals, openModal, closeModal } = useModal();

  const handleChange = (e) => {
    setValue(e.target.value);
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
            e.preventDefault();
            openModal(ADD_LINK);
          }}
        >
          추가하기
        </button>
        {modals[ADD_LINK] && (
          <FolderModal
            variant={ADD_LINK}
            closeModal={closeModal}
            link={value}
            list={list}
          />
        )}
      </form>
    </div>
  );
}

export default Header;
