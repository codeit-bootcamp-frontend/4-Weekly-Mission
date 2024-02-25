export function getShareUrl(folderId) {
  const protocol = window.location.protocol + '//';
  const host = window.location.host;
  const path = '/shared';
  const query = `?user=1&folder=${folderId}`;

  return protocol + host + path + query;
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

export const shareLinkToKakaoTalk = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init('35927e5d756bdd3f417246136b948c27');
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '딸기 치즈 케익',
        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  }
};

export function shareLinkToFacebook() {}
