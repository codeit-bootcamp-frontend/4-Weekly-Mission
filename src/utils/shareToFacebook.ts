export const shareToFacebook = (url: string) => {
  const sharedLink = encodeURIComponent(url);
  window.open(`${sharedLink}`);
};
