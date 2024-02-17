import { useState, useEffect } from "react";

function FolderPage() {
  const [profile, setProfile] = useState(null);
  const getData = async () => {
    const userData = await getProfile();
    setProfile(userData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav profile={profile}></Nav>
    </>
  );
}

export default FolderPage;
