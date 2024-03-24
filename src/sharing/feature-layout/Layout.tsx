import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "user/data-access-user";
import { Footer } from "sharing/ui-footer";
import { NavigationBar } from "sharing/ui-navigation-bar";
import { ProfileProps } from "sharing/share";

const cx = classNames.bind(styles);

interface LayoutProps {
  children: React.ReactNode;
  isSticky?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  isSticky = true,
}) => {
  const data: any = useGetUser();
  const { email, profileImageSource }: ProfileProps = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
