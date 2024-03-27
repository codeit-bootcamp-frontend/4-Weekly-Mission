import style from "./buttonFolder.module.scss";
import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

function ButtonFolder({children}: Props) {
  return <div className={style.buttonFolder}>{children}</div>;
}
export default ButtonFolder;
