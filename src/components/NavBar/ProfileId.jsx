import { useEffect, useState } from 'react';
import { getProfileData } from '../../apis/api';
import Styles from '../../styles/FolderPage.module.css';

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
        className={Styles.accountImg}
        src={state.profileImageSource}
        alt='profile_image'
      />
      <div className={Styles.accountId}>{state.email}</div>
    </div>
  );
};

export default ProfileId;
