import FacebookImg from '../../assets/facebook.svg';
import TwitterImg from '../../assets/twitter.svg';
import YoutubeImg from '../../assets/youtube.svg';
import InstargramImg from '../../assets/instargram.svg';
import "../../styles/footer.css";
import { Link } from "react-router-dom";
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
        <li><a target="_blank" rel="noreferrer" href="https://facebook.com/?locale=ko_KR"><img src={FacebookImg} alt="페이스북 아이콘"/></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://twitter.com/?lang=ko"><img src={TwitterImg} alt="트위터 아이콘"/></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/"><img src={YoutubeImg} alt="유튜브 아이콘"/></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={InstargramImg} alt="인스타그램 아이콘"/></a></li>
    </ul>
</div>
</footer>
}

export default Footer;