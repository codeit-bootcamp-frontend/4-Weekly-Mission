import { useState, useEffect } from "react";
import { fetchProfile } from "../api";

export default function useProfile() {
  const [profile, setProfile] = useState(null);

  async function getProfile() {
    try {
      const newProfile = await fetchProfile();
      setProfile(newProfile);
    } catch (e) {
      alert(e);
      return;
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return { profile };
}
