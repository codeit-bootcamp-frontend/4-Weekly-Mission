import React from 'react';

export default function Hero({ name, imageURL }) {
  return (
    <section className='flex flex-col items-center'>
      <img className='rounded-full w-14' src={imageURL} alt='user' />
      <p>@{name}</p>
    </section>
  );
}
