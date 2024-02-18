import { ROUTE } from "util/constant";
import { TEXT } from "../../constant";

export const FooterLinksContainer = () => {
  <div className="Footer-links">
    <a className="Footer-link" href={ROUTE.개인정보처리방침}>
      {TEXT.privacyPolicy}
    </a>
    <a className="Footer-link" href={ROUTE.FAQ}>
      {TEXT.faq}
    </a>
  </div>;
};
