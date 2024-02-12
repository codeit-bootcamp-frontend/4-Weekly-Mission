import '../css/Footer.css'
import facebookIcon from '../image/akar-icons_facebook-fill.svg';
import twitterIcon from '../image/akar-icons_twitter-fill.svg'
import youtubeIcon from '../image/akar-icons_youtube-fill.svg';
import instagramIcon from '../image/ant-design_instagram-filled.svg';
function Footer(){
    return (
        <div className="footer">
            <div className="footerBox">
                <span id="codeit">©codeit - 2023</span>
                <div className="centerfooter">
                    <a href="https://www.codeit.kr/subscription">Privacy Policy</a>
                    <a href="https://www.codeit.kr/faq">FAQ</a>
                </div>
                <div className="endfooter">
                    <a href="https://www.facebook.com/">
                    <img src={facebookIcon} alt="facebook"></img>
                    </a>
                    <a href="https://twitter.com/home?lang=ko">
                    <img src={twitterIcon} alt="twitter"></img>
                    </a>
                    <a href="https://www.youtube.com/">
                    <img src={youtubeIcon} alt="youtube"></img>
                    </a>
                    <a href="https://www.instagram.com/">
                    <img src={instagramIcon} alt="instagram"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;