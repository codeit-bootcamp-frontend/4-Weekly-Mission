import facebookImg from '../assets/facebook.svg';
import twitterImg from '../assets/twitter.svg';
import youtubeImg from '../assets/youtube.svg';
import instargramImg from '../assets/instargram.svg';

function Footer(){
    return  <footer className="footer">
    <a className="footer__logo" href="/">©codeit - 2023</a>
    <div>
        <ul className="footer__nav">
            <li><a className="footer__nav--text" href="./privacy.html">Privacy Policy</a></li>
            <li><a className="footer__nav--text" href="./faq.html">FAQ</a></li>
        </ul>
    </div>
<div className="footer_sns">
    <ul className="footer__link">
        <li><a target="_blank" rel="noreferrer" href="https://facebook.com/?locale=ko_KR"><img src={facebookImg} alt="페이스북 아이콘"/></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://twitter.com/?lang=ko"><img src={twitterImg} alt="트위터 아이콘"/></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/"><img src={youtubeImg} alt="유튜브 아이콘"/></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={instargramImg} alt="인스타그램 아이콘"/></a></li>
    </ul>
</div>
</footer>
}

export default Footer;