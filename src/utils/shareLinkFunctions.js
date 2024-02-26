import linkbraryImg from '../assets/linkbraryImg.png';

function getShareUrl(folderId) {
  const host = window.location.host;
  const path = '/shared';
  const query = `?user=1&folder=${folderId}`;

  return host + path + query;
}

export async function copyURLToClipboard(folderId) {
  const url = getShareUrl(folderId);
  try {
    await navigator.clipboard.writeText(url);
    alert('클립보드에 링크가 복사되었습니다.');
  } catch (e) {
    alert('링크 복사에 실패했습니다.');
  }
}

export function shareLinkToKakaoTalk(folderId) {
  const url = getShareUrl(folderId);
  const { Kakao } = window;
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: 'Linkbrary',
      description: '세상의 모든 정보를 쉽게 저장하고 관리해 보세요',
      imageUrl: linkbraryImg,
      link: {
        // mobileWebUrl: "https://developers.kakao.com",
        webUrl: url,
      },
    },

    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: url,
        },
      },
      {
        title: '앱으로 이동',
        link: {
          mobileWebUrl: '',
          webUrl: '',
        },
      },
    ],
  });
}

export function shareLinkToFacebook(folderId) {
  const url = getShareUrl(folderId);

  const facebookShareUrl =
    `https://www.facebook.com/sharer/sharer.php?u=` + encodeURIComponent(url);

  // 생성된 URL을 새 창으로 엽니다.
  window.open(facebookShareUrl, '_blank', 'width=600,height=400');
}
