import "./AddLinkInput.css";

function AddLinkInput() {
  return (
    <div className="AddLinkInput">
      <div className="inputContainer">
        <input placeholder="링크를 추가해 보세요" />
        <button>추가하기</button>
      </div>
    </div>
  );
}

export default AddLinkInput;
