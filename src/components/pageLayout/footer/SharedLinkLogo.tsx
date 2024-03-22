import styles from "./Footer.module.css";

export function SharedLinkLogo({
  href,
  target,
  src,
  alt,
}: {
  href: string;
  target: string;
  src: string;
  alt: string;
}) {
  return (
    <a
      className={`${styles.footerAnchor} ${styles.footerLogoWh} ${styles.footerLogoPadding}`}
      href={href}
      target={target}
    >
      <img src={src} alt={alt} />
    </a>
  );
}
