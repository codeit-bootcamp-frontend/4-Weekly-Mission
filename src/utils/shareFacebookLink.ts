const shareFacebookLink = (url: string): void => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
};

export default shareFacebookLink;
