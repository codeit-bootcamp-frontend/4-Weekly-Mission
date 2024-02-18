import CommonHeader from "../components/common/CommonHeader";
import Profile from "../components/Profile";

// SharedHeader와 FolderHeader의 겹치는 부분은 공통 컴포넌트인 CommonHeader로 관리
// 단, 공통 컴포넌트내에서 달라지는 부분인 Profile 컴포넌트 전달
function SharedHeader() {
  return (
    <CommonHeader headerType="shared">
      <Profile />
    </CommonHeader>
  );
}

export default SharedHeader;
