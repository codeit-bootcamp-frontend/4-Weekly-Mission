import FooterItems from "./FooterItems"
import { FooterCopyrightContainer } from "./FooterCopyright/FooterCopyrightContainer";
import { FooterLinksContainer } from "./FooterLinks/FooterLinksContainer";
import { FooterSNSContainer } from "./FooterSNS/FooterSNSContainer";

export const FooterItemsContainer = () => {
  <FooterItems>
    <FooterCopyrightContainer />
    <FooterLinksContainer />
    <FooterSNSContainer />
  </FooterItems>;
};
