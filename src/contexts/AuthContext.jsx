import React, { createContext, useContext, useState, useEffect } from 'react';

const API_BASE_URL = 'https://bootcamp-api.codeit.kr';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await fetch(`${API_BASE_URL}/api/sample/user`);
      if (!response.ok) {
        setUser(null);
      }
      const data = await response.json();
      setUser(data);
    };

    fetchUserProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
