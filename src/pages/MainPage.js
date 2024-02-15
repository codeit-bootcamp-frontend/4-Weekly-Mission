import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainHeader } from '../components/MainPage/MainHeader';
import { MainFooter } from '../components/MainPage/MainFooter';
import { useUserData } from '../hooks/useUserData';
import { userDataAPI } from '../api/BootcampAPI';

/*eslint-disable */
export default function MainPage() {
  const { userProfile } = useUserData(userDataAPI);
  console.log('ddd');
  return (
    <>
      <MainHeader userProfile={userProfile}></MainHeader>
      <Outlet></Outlet>
      <MainFooter></MainFooter>
    </>
  );
}
