import './Section.css';

function LinkBar() {
  return (
    <div id="linkAddBar">
      <div id="linkAddBarText">
        <img src={`${process.env.PUBLIC_URL}/images/linkIcon.svg`} alt="링크 추가 아이콘" />
        <p>링크를 추가해 보세요</p>
      </div>
      <button id="linkAddButton">추가하기</button>
    </div>
  );
}

export default LinkBar;
