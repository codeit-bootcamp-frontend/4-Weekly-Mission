import FooterItems from "./FooterItems"
import { FooterCopyright } from "./FooterCopyright/FooterCopyright";
import { FooterLinks } from "./FooterLinks/FooterLinks";
import { FooterSNS } from "./FooterSNS/FooterSNS";

export const FooterItemsContainer = () => {
  <FooterItems>
    <FooterCopyright />
    <FooterLinks />
    <FooterSNS />
  </FooterItems>;
};
