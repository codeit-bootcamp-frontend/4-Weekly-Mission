import SNS_DATA from '../constant/sns';
import './Footer.css';

export default function Footer() {
  const snsDataList = Object.entries(SNS_DATA);

  return (
    <div className="footer">
      <div className="footerFrame">
        <div className="footerItems">
          <span>©codeit - 2024</span>
          <div className="footerLink">
            <a href="/">Privacy Policy</a>
            <a href="/">FAQ</a>
          </div>
          <div className="sns">
            {snsDataList.map(([title, data]) => (
              <a key={data.link} href={data.link} target="_blank" rel="noopener noreferrer">
                <img src={data.imgSource} alt={title} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
