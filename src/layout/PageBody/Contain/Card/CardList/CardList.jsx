import { NullCardList } from "../NullCardList/NullCardList";
import "./CardList.css";
import { CardOption } from "./Option";
import { useLocation } from "react-router-dom";

export const CardList = ({ folderId, children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/shared") {
    return (
      <>
        <div className="CardList_header_contain"></div>
        <div className="CardList">{children}</div>
      </>
    );
  } else if (currentPath === "/folder") {
    return (
      <>
        <div className="CardList_header_contain">
          <div className="CardList_header_word">유용한 글</div>
          <div>{folderId === null && <CardOption />}</div>
        </div>
        {folderId === null ? (
          <div className="CardList">{children}</div>
        ) : (
          <NullCardList />
        )}
      </>
    );
  }

  return (
    <>
      <div className="CardList_header_contain">
        <div className="CardList_header_word">유용한 글</div>
        <div>{folderId === null && <CardOption />}</div>
      </div>
      {folderId === null ? (
        <div className="CardList">{children}</div>
      ) : (
        <NullCardList />
      )}
    </>
  );
};
