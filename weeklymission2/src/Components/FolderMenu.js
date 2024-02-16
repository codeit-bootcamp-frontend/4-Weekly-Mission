import "../styles/folderMenu.css";

export function FolderMenu({ onMenuChange }) {
  const sendMenu = (e) => {
    const newMenu = e.target.textContent;
    onMenuChange(newMenu);
  };

  return (
    <>
      <div className="folderMenu">
        <div>
          <button className="titleButton" onClick={sendMenu}>
            전체
          </button>
          <button className="titleButton" onClick={sendMenu}>
            즐겨찾기
          </button>
          <button className="titleButton" onClick={sendMenu}>
            코딩 팁
          </button>
          <button className="titleButton" onClick={sendMenu}>
            채용 사이트
          </button>
          <button className="titleButton" onClick={sendMenu}>
            유용한 글
          </button>
          <button className="titleButton" onClick={sendMenu}>
            나만의 장소
          </button>
        </div>

        <div className="add">폴더 추가 +</div>
      </div>
    </>
  );
}
