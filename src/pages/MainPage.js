import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainHeader } from '../components/mainPageComponents/MainHeader';
import { MainFooter } from '../components/mainPageComponents/MainFooter';
import { useUserData } from '../hooks/useUserData';
import { userDataAPI } from '../api/BootcampAPI';

export default function MainPage() {
  const { userProfile } = useUserData(userDataAPI);
  return (
    <>
      <MainHeader userProfile={userProfile}></MainHeader>
      <Outlet></Outlet>
      <MainFooter></MainFooter>
    </>
  );
}
