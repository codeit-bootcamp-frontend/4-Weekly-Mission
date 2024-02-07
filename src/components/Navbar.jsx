import React, { useEffect, useState } from 'react';
import User from './User';
import { getUser } from '../utils/api';

export default function Navbar() {
  const [email, setEmail] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { email, profileImageSource } = await getUser();
        setEmail(email);
        setImageURL(profileImageSource);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <header className='flex justify-between p-5'>
      <div>logo</div>
      <User email={email} imageURL={imageURL} />
    </header>
  );
}
