import SNS_DATA from "../constant/sns";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  const snsDataList = Object.entries(SNS_DATA);

  return (
    <div className="footer">
      <div className="footerFrame">
        <div className="footerItems">
          <span>©codeit - 2023</span>
          <div className="footerLink">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">FAQ</Link>
          </div>
          <div className="sns">
            {snsDataList.map(([title, data]) => (
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
      </div>
    </div>
  );
}
