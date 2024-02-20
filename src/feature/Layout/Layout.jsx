import { useGetUser } from 'data-access/useGetUser';
import { Footer } from '../Footer';
import { NavigationBar } from '../NavigationBar';
import { useLocation, Outlet } from 'react-router-dom';

export const Layout = () => {
  const { userData } = useGetUser();
  const location = useLocation();
  const { data } = userData || {};
  const [{ email, image_source: imageSource }] = data || [{}];
  const profile = data ? { email, imageSource } : null;

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
