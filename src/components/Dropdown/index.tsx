import { MouseEvent, useState } from "react";
import styles from "./Dropdown.module.scss";

interface Props {
  children: React.ReactNode;
  dropdownList: { name: string; onClickEvent: () => void }[];
  className?: string;
}

const Dropdown = ({ children, dropdownList, className }: Props) => {
  const [isDropdownView, setDropdownView] = useState(false);
  const handleClickBtn = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDropdownView(!isDropdownView);
  };

  const handleBlurBtn = () => {
    setDropdownView(false);
  };

  return (
    <div className={className} onClick={handleClickBtn} onBlur={handleBlurBtn}>
      {children}
      {isDropdownView && (
        <ul className={styles.dropdown}>
          {dropdownList.map((menu) => {
            return (
              <li
                key={menu.name}
                onClick={menu.onClickEvent}
                className={styles.menu}
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
