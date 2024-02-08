import React from 'react';

export default function User({ email, imageURL }) {
  return (
    <div>
      <img src={imageURL} alt='user' />
      <p>{email}</p>
    </div>
  );
}
