import FooterSocialLinkItem from './FooterSocialLinkItem';
import styles from './FooterSocialLinkBox.module.css';
function FooterSocialLinkBox() {
  const socialNetworkServiceName = {
    socialNetworkServices: [
      {
        socialServiceName: 'facebook',
        socialUrl: 'https://www.facebook.com/',
        id: 0,
      },
      {
        socialServiceName: 'twitter',
        socialUrl: 'https://www.twitter.com/',
        id: 1,
      },
      {
        socialServiceName: 'youtube',
        socialUrl: 'https:/www.youtube.com/',
        id: 2,
      },
      {
        socialServiceName: 'instagram',
        socialUrl: 'https://www.instagram.com/',
        id: 3,
      },
    ],
  };

  return (
    <ul className={styles['social-icon-wrapper']}>
      {socialNetworkServiceName.socialNetworkServices.map(
        ({ socialServiceName, socialUrl, id }) => {
          return (
            <FooterSocialLinkItem
              socialNetworkServiceName={socialServiceName}
              socialUrl={socialUrl}
              key={id}
              altImageName={socialServiceName}
            />
          );
        }
      )}
    </ul>
  );
}

export default FooterSocialLinkBox;
