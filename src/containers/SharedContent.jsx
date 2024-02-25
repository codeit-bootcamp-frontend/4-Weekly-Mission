import CommonContent from "../components/common/CommonContent";

// SharedContent FolderContent 겹치는 부분은 공통 컴포넌트인 CommonContent로 관리
// SharedContent에서는 CommonContent 그대로 사용
function SharedContent() {
  return (
    <div>
      {/* <h2>SharedContent입니다.</h2> */}
      <CommonContent />
    </div>
  );
}

export default SharedContent;
