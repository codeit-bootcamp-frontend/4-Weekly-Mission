import { useGetUser } from 'data-access/useGetUser';
import { Footer } from '../Footer';
import { NavigationBar } from '../NavigationBar';
import { useLocation, Outlet } from 'react-router-dom';

export const Layout = () => {
  const { data } = useGetUser();
  const location = useLocation();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} currentPath={location.pathname} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
