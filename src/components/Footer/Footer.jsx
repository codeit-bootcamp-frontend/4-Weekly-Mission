import FacebookIcon from '../../assets/facebook.svg';
import TwitterIcon from '../../assets/twitter.svg';
import YoutubeIcon from '../../assets/youtube.svg';
import InstargramIcon from '../../assets/instargram.svg';
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const footerLinkList = [
    {
        id: 1,
        url: "https://facebook.com/?locale=ko_KR",
        icon: FacebookIcon,
        text: "페이스북"
    },
    {
        id: 2,
        url: "https://twitter.com/?lang=ko",
        icon: TwitterIcon,
        text: "트위터"
    },
    {
        id: 3,
        url: "https://www.youtube.com",
        icon: YoutubeIcon,
        text: "유튜브"
    },
    {
        id: 4,
        url: "https://www.instagram.com",
        icon: InstargramIcon,
        text: "인스타그램"
    }
]
function Footer(){
    return  <footer className="footer">
    <Link className="footer__logo" to="/">©codeit - 2023</Link>
    <div>
        <ul className="footer__nav">
            <li><Link className="footer__nav--text" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="footer__nav--text" href="/faq">FAQ</Link></li>
        </ul>
    </div>
<div className="footer_sns">
    <ul className="footer__link">
        {footerLinkList.map(list => {
            const { id, url, icon, text } = list;
            return <li key={id}>
                <a href={url} target='_blank' rel='noreferrer'>
                    <img src={icon} alt={`${text} 아이콘`} />
                </a>
            </li>
        })}
    </ul>
</div>
</footer>
}

export default Footer;