import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "user/data-access-user";
import { Footer } from "sharing/ui-footer";
import { NavigationBar } from "sharing/ui-navigation-bar";
import { ReactNode } from "react";

const cx = classNames.bind(styles);
interface Props {
  children: ReactNode;
  isSticky?: true | false;
}
interface DataType {
  email?: string;
  profileImageSource?: string;
}
export const Layout = ({ children, isSticky = true }: Props) => {
  const { data } = useGetUser();
  const { email, profileImageSource }: DataType = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
