import "../style/addLink.css";
function AddLink() {
  return (
    <div className="addLink-container">
      <form className="addLinkForm">
        <input className="addLink" placeholder="링크를 추가해보세요." />
        <button className="addLinkBtn">추가하기</button>
      </form>
    </div>
  );
}
export default AddLink;
