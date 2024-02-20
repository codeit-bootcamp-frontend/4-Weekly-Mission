import { Link } from "react-router-dom";
import SNS from "./sns";
import "./Footer.css";

function Footer() {
  const snsList = Object.entries(SNS);
  return (
    <footer>
      <div className="footerItems">
        <p>©codeit - 2023</p>
        <div className="footerLink">
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
        <div className="sns">
          {snsList.map(([title, data]) => (
            <Link
              key={data.link}
              to={data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.imgSource} alt={title} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
