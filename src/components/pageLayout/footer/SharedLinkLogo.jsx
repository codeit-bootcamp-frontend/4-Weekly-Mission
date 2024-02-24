import styles from "./Footer.module.css";

export function SharedLinkLogo({ id, href, target, src, alt }) {
  return (
    <a
      key={id}
      className={`${styles.footerAnchor} ${styles.footerLogoWh} ${styles.footerLogoPadding}`}
      href={href}
      target={target}
    >
      <img src={src} alt={alt} />
    </a>
  );
}
