import { useEffect, useState } from 'react';
import { getProfileData } from '../api';

const ProfileId = ({ state }) => {
  console.log(state);
  return (
    <div>
      <img src={state.profileImageSource} alt='profile_image' />
      <div>{state.email}</div>
    </div>
  );
};

export default ProfileId;
