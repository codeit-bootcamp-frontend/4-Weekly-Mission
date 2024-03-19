import styled from 'styled-components';
import { FacebookShareButton, FacebookIcon } from 'react-share';

function ShareModal() {
  const currentUrl = window.location.href;
  return (
    <>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={18} round={true}></FacebookIcon>
      </FacebookShareButton>
    </>
  );
}
