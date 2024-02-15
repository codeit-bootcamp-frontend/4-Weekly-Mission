import { useState, useEffect } from 'react';
export const useUserData = (userDataAPI) => {
  const [userProfile, setUserProfile] = useState({ email: null, image: null });

  useEffect(() => {
    const getAPIData = async () => {
      const userData = await userDataAPI();
      setUserProfile(userData);
    };
    getAPIData();
  }, []);

  return { userProfile };
};
