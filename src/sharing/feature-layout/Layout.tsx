import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "user/data-access-user";
import { Footer } from "sharing/ui-footer";
import { NavigationBar } from "sharing/ui-navigation-bar";

type LayoutType = {
  children: React.ReactNode;
  isSticky: boolean;
};

interface Data {
  email?: string;
  profileImageSource?: string;
}

const cx = classNames.bind(styles);

export const Layout = ({ children, isSticky = true }: LayoutType) => {
  const { data } = useGetUser();
  const { email, profileImageSource }: Data = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
