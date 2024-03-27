import "../styles/foldermain.css";

function FolderMain() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="link-container">
      <form className="link" onSubmit={handleSubmit}>
        <img src="img/link.svg" alt="link" />
        <input className="link-input" type="text" placeholder="링크를 추가해 보세요." />
        <button className="button-linkadd">추가하기</button>
      </form>
    </div>
  );
}

export default FolderMain;
