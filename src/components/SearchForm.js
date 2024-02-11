import "../css/SearchForm.css";
function SearchForm() {
  return (
    <form>
      <input
        className="search"
        type="search"
        placeholder="링크를 검색해 보세요."
      />
    </form>
  );
}

export default SearchForm;
