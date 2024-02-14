import MainPageGNB from "../GNB/MainPageGNB";

export default function MainPageHeader({ user, isLogin }) {
  return (
    <header>
      <MainPageGNB user={user} isLogin={isLogin} />
    </header>
  );
}
