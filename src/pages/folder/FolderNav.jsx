import link from "../../imgs/link.svg";
import "./FolderNav.css";

export default function FolderNav() {
  return (
    <>
      <section className="folderNav">
        <form className="linkForm">
          <label htmlFor="link" className="linkForm--label">
            <img src={link} alt="link" />
          </label>
          <input
            type="text"
            id="link"
            placeholder="링크를 추가해 보세요"
            className="linkForm--input"
          />
          <button type="button" className="linkForm--Bt">
            추가하기
          </button>
        </form>
      </section>
    </>
  );
}
