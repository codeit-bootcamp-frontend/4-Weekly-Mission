import smileIcon from "../../assets/icons/icon_smile.png";

const SharedSection = () => {
  return (
    <section className="codeit-mark-section">
      <div className="codeit-mark">
        <img src={smileIcon} alt={"smile icon"}></img>
      </div>
      <span>@코드잇</span>
      <div id="favorites">
        <h1>⭐️ 즐겨찾기</h1>
      </div>
    </section>
  );
};

export default SharedSection;
