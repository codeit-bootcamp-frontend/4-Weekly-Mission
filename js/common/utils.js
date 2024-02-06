export const redirect = (url) => {
  if (!url) return;
  window.location.href = url;
};
