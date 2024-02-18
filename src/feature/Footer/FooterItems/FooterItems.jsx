import { FooterItemsCss } from "./FooterItemsCss"
import { FooterCopyright } from "./FooterCopyright/FooterCopyright";
import { FooterLinks } from "./FooterLinks/FooterLinks";
import { FooterSNS } from "./FooterSNS/FooterSNS";

export const FooterItems = () => {
  return (
    <FooterItemsCss>
      <FooterCopyright />
      <FooterLinks />
      <FooterSNS />
    </FooterItemsCss>
  )
};
