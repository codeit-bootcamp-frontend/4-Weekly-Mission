import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavigationBar from "./Navbar";
import { useCallback, useEffect, useState } from "react";
import { getFolderUserInfo, getSampleUserInfo } from "../api/api";

function App() {
  const { pathname } = useLocation();
  const [className, setClassName] = useState('')
  const [isLoginStatus, setIsLoginStatus] = useState(false);
  const [profileData, setProfileData] = useState({
    profileImageSource: '',
    email: '',
  });

  const getSharedPageProfileData = async () => {
    const data  = await getSampleUserInfo();
    
    if (!data) return;

    setProfileData(data);
    setIsLoginStatus(true);
  }

  const getFolderPageProfileData = async () => {
    const { data }  = await getFolderUserInfo();
    
    if (!data[0]) return;

    const purifiedData = {
        profileImageSource: data[0].image_source,
        email: data[0].email,
      }

    setProfileData(purifiedData);
    setIsLoginStatus(true);
  }

  const handleLoad = useCallback(() => {
    if (pathname === '/shared') {
      setClassName('sharedNav');
      getSharedPageProfileData();
    }
    if (pathname === '/folder') {
      setClassName('folderNav');
      getFolderPageProfileData();
    }
  }, [pathname]
  )

  useEffect(() => {
    handleLoad();
  }, [handleLoad])

  return (
    <div>
      <NavigationBar
        className={className}
        profileData={profileData}
        isLoginStatus={isLoginStatus}/>
      <div><Outlet /></div>
      <Footer />
    </div>
  );
}

export default App;