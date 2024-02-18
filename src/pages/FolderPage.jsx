import FolderHeader from "../containers/FolderHeader";
import FolderContent from "../containers/FolderContent";
import CommonFooter from "../components/common/CommonFooter";

// SharedPage와 FolderPage의 footer는 완전히 동일해서 공통 컴포넌트인 CommonFooter로 관리
function FolderPage() {
  return (
    <div>
      <FolderHeader />
      <FolderContent />
      <CommonFooter />
    </div>
  );
}

export default FolderPage;
