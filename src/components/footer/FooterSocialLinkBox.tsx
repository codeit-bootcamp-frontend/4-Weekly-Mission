import FooterSocialLinkItem from './FooterSocialLinkItem';
import styles from './FooterSocialLinkBox.module.css';
function FooterSocialLinkBox() {
  interface SocialObject {
    socialServiceName: string;
    socialUrl: string;
    id: number;
    altImageName: string;
  }

  interface SocialBoxType {
    socialNetworkServices: SocialObject[];
  }

  const socialNetworkServiceName: SocialBoxType = {
    socialNetworkServices: [
      {
        socialServiceName: 'facebook',
        socialUrl: 'https://www.facebook.com/',
        id: 0,
        altImageName: 'facebook',
      },
      {
        socialServiceName: 'twitter',
        socialUrl: 'https://www.twitter.com/',
        id: 1,
        altImageName: 'twitter',
      },
      {
        socialServiceName: 'youtube',
        socialUrl: 'https:/www.youtube.com/',
        id: 2,
        altImageName: 'youtube',
      },
      {
        socialServiceName: 'instagram',
        socialUrl: 'https://www.instagram.com/',
        id: 3,
        altImageName: 'instagram',
      },
    ],
  };

  return (
    <ul className={styles['social-icon-wrapper']}>
      {socialNetworkServiceName.socialNetworkServices.map(
        ({ socialServiceName, socialUrl, id, altImageName }) => {
          return (
            <FooterSocialLinkItem
              socialServiceName={socialServiceName}
              socialUrl={socialUrl}
              key={id}
              altImageName={altImageName}
            />
          );
        }
      )}
    </ul>
  );
}

export default FooterSocialLinkBox;
