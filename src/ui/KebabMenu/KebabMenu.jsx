import "./KebabMenu.css";

export function KebabMenu() {
  return (
    <div className="CardContent-kebab-menu">
      <button type="button" className="CardContent-kebab-menu-delete">
        삭제하기
      </button>
      <button type="button" className="CardContent-kebab-menu-addFolder">
        폴더에 추가
      </button>
    </div>
  );
}
