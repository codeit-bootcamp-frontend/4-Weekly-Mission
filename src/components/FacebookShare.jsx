import React from 'react';
import { FacebookShareButton } from 'react-facebook';

const FacebookShare = ({ url, quote }) => {
  return (
    <FacebookShareButton url={url} quote={quote}>
      Share on Facebook
    </FacebookShareButton>
  );
};

export default FacebookShare;
