function FooterSocialLinkItem({ socialNetworkServiceName, socialUrl }) {
  return (
    <li>
      <a href={socialUrl}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${socialNetworkServiceName}_icon.svg`}
          alt={`${socialNetworkServiceName}_icon_image`}
        ></img>
      </a>
    </li>
  );
}

export default FooterSocialLinkItem;
