const calcTimeAgo = (createdAt: string) => {
  const today: Date = new Date();
  const day: Date = new Date(createdAt);
  const diff: number = Math.floor((+today - +day) / 1000); // 초 단위로 변환

  if (diff < 120) {
    return '1 minute ago';
  }
  if (diff < 3600) {
    return `${Math.floor(diff / 60)} minutes ago`;
  }
  if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hours ago`;
  }
  if (diff < 2678400) {
    return `${Math.floor(diff / 86400)} days ago`;
  }
  if (diff < 31557600) {
    return `${Math.floor(diff / 2678400)} months ago`;
  }
  if (31557600 <= diff) {
    return `${Math.floor(diff / 31557600)} years ago`;
  }
};

export default calcTimeAgo;
