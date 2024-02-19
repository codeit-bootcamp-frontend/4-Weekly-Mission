import linkIcon from "../../image/link.svg";

function AddLinks() {
  return (
    <div className="addLinks">
      <form className="addLinksBox">
        <div className="addLinksInputBox">
          <img src={linkIcon} alt="LinkIcon" />
          <input type="text" placeholder="링크를 추가해 보세요." />
        </div>
        <button>추가하기</button>
      </form>
    </div>
  );
}

export default AddLinks;
