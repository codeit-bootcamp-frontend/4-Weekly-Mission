import "./FolderToolbar.css";

export default function FolderToolbar() {
  return (
    <div className="folder-toolbar">
      <span>유용한 글</span>
      <div className="folder-options">
        <span className="folder-option-item">
          <img src="images/share.svg" alt="share" />
          공유
        </span>
        <span className="folder-option-item">
          <img src="images/edit.svg" alt="edit" />
          이름변경
        </span>
        <span className="folder-option-item">
          <img src="images/delete.svg" alt="delete" />
          삭제
        </span>
      </div>
    </div>
  );
}
