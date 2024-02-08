import React from 'react';

export default function Hero({ name, imageURL }) {
  return (
    <section>
      <img src={imageURL} alt='user' />
      <p>@{name}</p>
    </section>
  );
}
