import "../css/LinkAddForm.css";

function LinkAddForm() {
  return (
    <form>
      <input
        className="linkadd"
        type="search"
        placeholder="링크를 추가해 보세요"
      />
      <input className="linkaddbtn" type="submit" value="추가하기" />
    </form>
  );
}
export default LinkAddForm;
