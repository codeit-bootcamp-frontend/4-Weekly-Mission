// import SharedHeader from "../containers/SharedHeader";
// import SharedContent from "../containers/SharedContent";
// import CommonFooter from "../components/common/CommonFooter";

import SharedHeader from "../containers/SharedHeader";

// // SharedPage와 FolderPage의 footer는 완전히 동일해서 공통 컴포넌트인 CommonFooter로 관리
// function SharedPage() {
//   return (
//     <div>
//       <SharedHeader />
//       <SharedContent />
//       <CommonFooter />
//     </div>
//   );
// }

// export default SharedPage;

function SharedPage() {
  return (
    <div>
      <h2>SharedPage 컴포넌트입니다.</h2>
      <SharedHeader />
    </div>
  );
}

export default SharedPage;
