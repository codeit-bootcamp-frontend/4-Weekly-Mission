import style from "./card.module.scss";
import starOn from "../../assets/star-on.svg";
import starOff from "../../assets/star-off.svg";
import MoreSee from "../../assets/threeMoreDots.svg";
import logo from "../../assets/logo.svg";
import {useState} from "react";
function Card({}) {
  const [toggleStar, setToggleStar] = useState(true);
  function handleStar() {
    setToggleStar(!toggleStar);
  }
  return (
    <div className={style.card}>
      <div className={style.cardImg}>
        <img className={style.imgLogo} src={logo} alt="logo" />
        <img
          className={style.imgStar}
          src={toggleStar ? starOn : starOff}
          alt="별모양 즐겨찾기"
          onClick={handleStar}></img>
      </div>
      <div className={style.cardContent}>
        <div className={style.cardContentTime}>
          <span>10 minutes ago</span>
          <img src={MoreSee} alt="더보기 버튼" />
        </div>
        <div className={style.cardContentText}>
          Lorem ipsum dolor sit amet consectetur.
          <br /> Metus amet habitant nunc consequat. Tldkd
        </div>
        <div className={style.cardContentDay}>2023. 3. 15</div>
      </div>
    </div>
  );
}
export default Card;

// 데이터를 받아와야함 어떻게?
// 임시디자인 -완-
