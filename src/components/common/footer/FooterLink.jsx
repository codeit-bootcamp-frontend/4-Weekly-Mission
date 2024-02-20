import { Link } from 'react-router-dom';
const FooterLink = () => {
  return (
    <div className="footer-links">
      <Link className="footer-link" to="/privacy">
        Privacy Policy
      </Link>
      <Link className="footer-link" to="/faq">
        FAQ
      </Link>
    </div>
  );
};
export default FooterLink;
