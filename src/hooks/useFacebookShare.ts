import { useEffect } from 'react';

const useFacebookShare = (selectedFolderId: number) => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '913370973581693',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v14.0',
      });
    };

    (function (d, s, id) {
      var js: HTMLScriptElement,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const handleFacebookShare = () => {
    window.FB.ui({
      method: 'share',
      href: `${window.location.origin}/shared/${selectedFolderId}`,
    });
  };

  return { handleFacebookShare };
};

export default useFacebookShare;
