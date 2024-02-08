import React from 'react';

export default function User({ email, imageURL }) {
  return (
    <div className='flex gap-3 items-center'>
      <img className='rounded-full w-10' src={imageURL} alt='user' />
      <p>{email}</p>
    </div>
  );
}
