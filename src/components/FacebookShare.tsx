import React from 'react';
import { FacebookShareButton } from 'react-facebook';
import { FacebookShareProps } from '../types/interfaces/props';

const FacebookShare = ({ url, quote }: FacebookShareProps) => {
  return (
    <FacebookShareButton url={url} quote={quote}>
      Share on Facebook
    </FacebookShareButton>
  );
};

export default FacebookShare;
