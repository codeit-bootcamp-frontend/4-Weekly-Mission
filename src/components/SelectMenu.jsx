import style from "./SelectMenu.module.css";

function SelectMenu() {
  return (
    <div className={style.container}>
      <div className={style.nonClicked}>삭제하기</div>
      <div className={style.clicked}>폴더에 추가</div>
    </div>
  );
}

export default SelectMenu;
