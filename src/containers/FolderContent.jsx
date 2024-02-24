// import FolderList from "../components/FolderList";
// import AddFolderButton from "../components/AddFolderButton";
// import FolderActions from "../components/FolderActions";
// import CommonContent from "../components/common/CommonContent";

// // SharedContent FolderContent 겹치는 부분은 공통 컴포넌트인 CommonContent로 관리
// // FolderContent에서는 CommonContent에 additionalContent 전달 (SharedContent에는 없는 부분)
// function FolderContent() {
//   // FolderList -> 폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용
//   // AddFolderButton -> '폴더 추가 +'가 들어가는 부분(기능은 추후 구현)
//   // FolderActions -> '공유 이름변경 삭제'가 들어가는 부분(기능은 추후 구현)
//   const additionalContent = (
//     <div>
//       <h2>FolderContent입니다.</h2>
//       <div>
//         <FolderList />
//         <AddFolderButton />
//       </div>
//       <div>
//         <span>유용한 글</span>
//         <FolderActions />
//       </div>
//     </div>
//   );
//   return <CommonContent additionalContent={additionalContent} />;
// }

// export default FolderContent;
