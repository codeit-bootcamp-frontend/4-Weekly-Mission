import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainFooter } from '../components/mainPageComponents/MainFooter';
import { useAPIData } from '../hooks/useAPIData';
import { userDataAPI } from '../api/BootcampAPI';

export default function MainPage() {
  const { Data: userProfile } = useAPIData(userDataAPI);
  return (
    <>
      <Outlet context={{ userProfile: userProfile }}></Outlet>
      <MainFooter></MainFooter>
    </>
  );
}
