import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainFooter } from '../components/mainPageComponents/MainFooter';
import { useUserData } from '../hooks/useUserData';
import { userDataAPI } from '../api/BootcampAPI';

export default function MainPage() {
  const { userProfile } = useUserData(userDataAPI);
  return (
    <>
      <Outlet context={{ userProfile: userProfile }}></Outlet>
      <MainFooter></MainFooter>
    </>
  );
}
