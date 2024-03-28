function FooterSocialLinkItem({
  socialServiceName,
  socialUrl,
  altImageName,
}: {
  socialServiceName: string;
  socialUrl: string;
  altImageName: string;
}) {
  return (
    <li>
      <a href={socialUrl}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${socialServiceName}_icon.svg`}
          alt={`${altImageName}_icon_image`}
        ></img>
      </a>
    </li>
  );
}

export default FooterSocialLinkItem;
