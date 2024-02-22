import logo from '../assets/logo.png';
import ProfileId from './ProfileId';
import { useEffect, useState } from 'react';
import { getProfileData, getFolderData } from '../api';
import FolderInfo from '../Main/FolderInfo';

const NavBar = () => {
  const [state, setState] = useState({});
  const [data, setData] = useState({});
  const [name, setName] = useState('');

  const fetchProfileData = async () => {
    const res = await getProfileData();
    setState(res);
  };

  const fetchFolderData = async () => {
    const res = await getFolderData();
    setName(res.folder.name);
    setData(res.folder.owner);
  };

  useEffect(() => {
    fetchProfileData();
    fetchFolderData();
  }, []);

  return (
    <div>
      <img src={logo} alt='logo' />
      <ProfileId state={state} />
      <FolderInfo data={data} name={name} />
    </div>
  );
};
export default NavBar;
