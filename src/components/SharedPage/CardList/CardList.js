import CardListItem from "components/SharedPage/CardListItem/CardListItem";
import styles from "./CardList.module.css";

function CardList({ links }) {
  document.addEventListener("DOMContentLoaded", function () {
    // 모든 link 클래스 요소를 가져옴
    var links = document.querySelectorAll(".link");

    // 클릭 이벤트를 부모 요소에 위임하여 처리
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        // 클릭한 요소가 star-btn 또는 kebab-btn 클래스를 가지고 있는지 확인
        if (
          event.target.classList.contains("star-btn") ||
          event.target.classList.contains("kebab-btn")
        ) {
          // star-btn 또는 kebab-btn를 클릭한 경우 이벤트 기본 동작 막기
          event.preventDefault();
        }
      });
    });
  });
  return (
    <div className={styles["card-container"]}>
      <ul className={styles["grid"]}>
        {links &&
          links.map((link) => <CardListItem key={link.id} link={link} />)}
      </ul>
    </div>
  );
}

export default CardList;
