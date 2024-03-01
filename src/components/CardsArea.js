import "./CardsArea.css";
import CardList from "./CardList.js";

// 에러처리, 로딩처리 추후 추가 예정
function CardsArea({ foldersData, buttonData }) {
  return (
    <div className="card">
      <div className="card_inner">
        {/* {buttonData ? <ButtonList buttonData={buttonData} /> : " "} */}
        <CardList items={foldersData} />
      </div>
    </div>
  );
}

export default CardsArea;
