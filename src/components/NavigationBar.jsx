import logo from "../image/icons/LinkbraryLogo.svg";
import { useGetData } from "./Hooks/useAsync";
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
  const { data, error, loading } = useGetData();
  console.log(data);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <div className={style.NavigationBar}>
      <div className={style.LogoAccountWrapper}>
        <img className={style.Logo} src={logo} alt="LinkbraryLogo" />
        {data ? (
          <div className={style.Account}>
            <img
              className={style.ProfileImg}
              // src="{profile.profileImageSource || profile.image_source}"
              src={data.profileImageSource}
              alt="Profile"
            />
            <span className={style.ProfileEmail}>{data.email}</span>
          </div>
        ) : (
          <span className={style.SignInButton}>로그인</span>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
