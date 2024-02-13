import './Footer.css';

function Footer() {
    return(
        <footer>
            <div>
                <p>©codeit - 2023</p>
                <ul>
                    <li>
                        <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/faq">FAQ</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/facebook.png)`}} href="https://www.facebook.com/?locale=ko_KR" target="_blank" rel="noreferrer">페이스북</a>
                    </li>
                    <li>
                        <a style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/twitter.png)`}} href="https://twiter.com/?lang=ko" target="_blank" rel="noreferrer">트위터</a>
                    </li>
                    <li>
                        <a style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/youtube.png)`}} href="https://www.youtube.com/" target="_blank" rel="noreferrer">유튜브</a>
                    </li>
                    <li>
                        <a style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/instagram.png)`}} href="https://www.instagram.com/" target="_blank" rel="noreferrer">인스타그램</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;