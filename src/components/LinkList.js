import '../css/LinkList.css';

function LinkList() {
  return (
    <div className="content">
      <form>
        <input name="search" placeholder='링크를 검색해 보세요.' />
        <button type="submit">검색</button>
      </form>
      <div>content</div>
    </div>
  )
}

export default LinkList;