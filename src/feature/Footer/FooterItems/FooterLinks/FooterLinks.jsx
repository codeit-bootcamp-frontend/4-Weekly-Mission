import { ROUTE } from "util/constant";
import { TEXT } from "../../constant";
import { FooterLinksCss } from './FooterLinksCss'
export const FooterLinks = () => {
  <FooterLinksCss>
    <a className="Footer-link" href={ROUTE.개인정보처리방침}>
      {TEXT.privacyPolicy}
    </a>
    <a className="Footer-link" href={ROUTE.FAQ}>
      {TEXT.faq}
    </a>
  </ FooterLinksCss>
};
