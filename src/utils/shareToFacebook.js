export const shareToFacebook = (url) => {
  const sharedLink = encodeURIComponent(url);
  window.open(`${sharedLink}`);
};
