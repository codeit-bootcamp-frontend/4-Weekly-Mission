// import style from "../styles/NavigationBar.module.css";
// import logo from "../image/icons/LinkbraryLogo.svg";

// // CommonHeader의 NavigationBar 부분
// function NavigationBar({ profile }) {
//   return (
//     <div className={style.NavigationBar}>
//       <div className={style.LogoAccountWrapper}>
//         <img className={style.Logo} src={logo} alt="LinkbraryLogo" />
//         {profile ? (
//           <div className={style.Account}>
//             <img
//               className={style.ProfileImg}
//               src="{profile.profileImageSource || profile.image_source}"
//               alt="Profile"
//             />
//             <span className={style.ProfileEmail}>{profile.email}</span>
//           </div>
//         ) : (
//           <span className={style.SignInButton}>로그인</span>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavigationBar;

function NavigationBar() {
  return (
    <div>
      <h2>NavigationBar 컴포넌트입니다.</h2>
      <div>
        <img src="" alt="" />
        <div>
          <img src="" alt="" />
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
