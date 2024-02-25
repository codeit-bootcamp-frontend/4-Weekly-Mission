import { useEffect, useState } from 'react';
import { getProfileData } from '../../apis/api';
import Styles from '../../styles/Folder.module.css';

const ProfileId = () => {
  const [state, setState] = useState({});

  const fetchProfileData = async () => {
    const res = await getProfileData();
    setState(res);
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className={Styles.account}>
      <img
        className={Styles.profileImg}
        src={state.profileImageSource}
        alt='profile_image'
      />
      <div>{state.email}</div>
    </div>
  );
};

export default ProfileId;
