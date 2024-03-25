import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "sharing/util";
import { Cta } from "sharing/ui-cta";
import { Profile } from "user/ui-profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import { IProfile } from "@/types/profile";

const cx = classNames.bind(styles);

// 타입스크립트가 오류를 잡지 못하고 있음 질문!!
interface NavigationBarProps {
  profile: IProfile; // 이 부분을 string으로 바꿔도 밑에서 오류가 안남
  isSticky: boolean;
}

export const NavigationBar = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <a href={ROUTE.랜딩}>
          <img
            className={cx("logo")}
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {profile ? (
          <Profile profile={profile} /> // 여기 오류를 못잡음
        ) : (
          <a href={ROUTE.로그인}>
            <Cta>
              <span className={cx("signin")}>{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
