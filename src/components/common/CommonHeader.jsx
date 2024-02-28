// import { useEffect, useState } from "react";
// import style from "../../styles/CommonHeader.module.css";
// import NavigationBar from "../NavigationBar";
// // import { getData } from "../api";

import NavigationBar from "../NavigationBar";

// // SharedHeader에서는 Profile을 받아오고, FolderHeader에서는 LinkAdd를 받아옴
// function CommonHeader({ headerType, children }) {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       // try {
//       //   const data = await getData(headerType);
//       //   setProfile(data);
//       // } catch (error) {
//       //   console.error("에러가 발생했습니다.", error);
//       //   setProfile(null);
//       // }
//       // console.log(data);
//       // setProfile(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className={style.CommonHeader}>
//       <NavigationBar profile={profile.id} />
//       {children}
//     </div>
//   );
// }

// export default CommonHeader;

function CommonHeader(props) {
  return (
    <div>
      {/* <h2>CommonHeader 컴포넌트입니다.</h2> */}
      <NavigationBar />
      {props.children}
    </div>
  );
}

export default CommonHeader;
