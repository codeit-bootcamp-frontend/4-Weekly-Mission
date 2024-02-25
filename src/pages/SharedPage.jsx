import CommonFooter from "../components/common/CommonFooter";
import SharedContent from "../containers/SharedContent";
import SharedHeader from "../containers/SharedHeader";

// SharedPage와 FolderPage의 footer는 완전히 동일해서 공통 컴포넌트인 CommonFooter로 관리
function SharedPage() {
  return (
    <div>
      {/* <h2>SharedPage 컴포넌트입니다.</h2> */}
      <SharedHeader />
      <SharedContent />
      <CommonFooter />
    </div>
  );
}

export default SharedPage;
