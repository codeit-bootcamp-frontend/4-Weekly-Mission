import "./CardList.css";
import { CardOption } from "./Option";

export const CardList = ({ children }) => {
  return (
    <>
      <div className="CardList_header_contain">
        <div className="CardList_header_word">유용한 글</div>
        <div>
          <CardOption />
        </div>
      </div>
      <div className="CardList">{children}</div>
    </>
  );
};
