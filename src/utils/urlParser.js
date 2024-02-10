function extractDomain(url) {
  const regex = /^https?:\/\/([^\/]+)\//;
  const match = url.match(regex);

  return match ? match[1] : '';
}

function hasDomain(url) {
  const isValid = url ? true : false;
  return isValid;
}

export function processUrl(url) {
  return hasDomain(url) ? extractDomain(url) : '';
}
// 현재는 불필요 : 나중에 사용할 수 있으니, 남겨놓겠습니다.