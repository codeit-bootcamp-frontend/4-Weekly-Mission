import { useGetData } from "./Hooks/useAsync";
import logo from "../image/icons/LinkbraryLogo.svg";
import style from "../styles/NavigationBar.module.css";

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
  const { data, error, loading } = useGetData("/sample/user");
  console.log(data);

  if (loading) return <div>NavigationBar 로딩중...</div>;
  if (error) return <div>NavigationBar에 에러가 발생했습니다.</div>;

  return (
    <div
      className={`${style.navigation_bar} ${data ? style.navigation_bar : style.navigation_bar_logout}`}
    >
      <div className={style.logo_account_container}>
        <img className={style.logo} src={logo} alt="LinkbraryLogo" />
        {data ? (
          <div className={style.account}>
            <img
              className={style.profile_img}
              // src="{profile.profileImageSource || profile.image_source}"
              src={data.profileImageSource}
              alt="Profile"
            />
            <span className={style.profile_email}>{data.email}</span>
          </div>
        ) : (
          <span className={style.sign_in_button}>로그인</span>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
