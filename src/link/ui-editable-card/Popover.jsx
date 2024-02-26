import stylesPopover from "./Popover.module.css";
import { useState } from "react";

export default function Popover({ children }) {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(!focus);
  };

  return (
    <p
      className={`${stylesPopover.text} ${focus ? stylesPopover.focus : ""}`}
      onClick={handleFocus}
    >
      {children}
    </p>
  );
}
