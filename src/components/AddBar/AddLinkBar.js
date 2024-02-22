import "./AddLinkBar.css";

export const AddLinkBar = () => {
  return (
    <div className="AddLink">
      <div className="AddLinkBar">
        <input
          className="AddLinkBar-input"
          type="search"
          placeholder="링크를 추가해 보세요."
        />
        <img src="images/link.png" alt="Link-icon" className="Link-icon" />
        <button className="AddLinkButton" type="submit">
          추가하기
        </button>
      </div>
    </div>
  );
};
