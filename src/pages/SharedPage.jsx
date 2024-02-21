import SharedHeader from "../containers/SharedHeader";
import SharedContent from "../containers/SharedContent";
import CommonFooter from "../components/common/CommonFooter";

// SharedPage와 FolderPage의 footer는 완전히 동일해서 공통 컴포넌트인 CommonFooter로 관리
function SharedPage() {
  return (
    <div>
      <SharedHeader />
      <SharedContent />
      <CommonFooter />
    </div>
  );
}

export default SharedPage;
