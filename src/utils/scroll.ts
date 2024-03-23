export const preventScroll = () => {
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.overflowY = "scroll";
  return window.scrollY;
};

export const allowScroll = (prevScrollY: number) => {
  document.body.style.position = "";
  document.body.style.width = "";
  document.body.style.top = "";
  document.body.style.overflowY = "";
  window.scrollTo(0, prevScrollY);
};
