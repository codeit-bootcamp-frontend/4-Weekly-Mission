import styles from "./FooterSocialLinkBox.module.css";
import FooterSocialLinkItem from "./FooterSocialLinkItem";
import data from "./SocialNetworkServicesData.json";
function FooterSocialLinkBox() {
  const SocialNetworkServiceName = data.socialNetworkServices;
  console.log(SocialNetworkServiceName);

  return (
    <ul className={styles.social_icon_wrapper}>
      {SocialNetworkServiceName.map(({ socialServiceName, socialUrl, id }) => {
        return (
          <FooterSocialLinkItem
            socialNetworkServiceName={socialServiceName}
            socialUrl={socialUrl}
            key={id}
            altImageName={socialServiceName}
          />
        );
      })}
    </ul>
  );
}

export default FooterSocialLinkBox;
