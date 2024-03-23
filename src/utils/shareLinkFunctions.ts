function getShareUrl(folderId: number) {
  const host = window.location.host;
  const path = '/shared';
  const query = `?user=1&folder=${folderId}`;

  return host + path + query;
}

export async function copyURLToClipboard(folderId: number) {
  const url = getShareUrl(folderId);
  try {
    await navigator.clipboard.writeText(url);
    alert('클립보드에 링크가 복사되었습니다.');
  } catch (e) {
    alert('링크 복사에 실패했습니다.');
  }
}

export function shareLinkToKakaoTalk(folderId: number) {
  console.log('카카오톡 공유 기능 구현');
}

export function shareLinkToFacebook(folderId: number) {
  const url = getShareUrl(folderId);

  const facebookShareUrl =
    `https://www.facebook.com/sharer/sharer.php?u=` + encodeURIComponent(url);

  // 생성된 URL을 새 창으로 엽니다.
  window.open(facebookShareUrl, '_blank', 'width=600,height=400');
}
