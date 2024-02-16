import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="codeIt">
                    <p>©codeit - 2023</p>
                </div>
                <div className="privacy">
                    <a href="/privacy.html">Privacy Policy</a>
                    <a href="/faq.html">FAQ</a>
                </div>
                <div className="external_link">
                    <a
                        href="https://www.facebook.com/"
                        target="_blacnk"
                        className="icon facebook"
                    ></a>
                    <a href="https://twitter.com/" target="_blacnk" className="icon twitter"></a>
                    <a
                        href="https://www.youtube.com/"
                        target="_blacnk"
                        className="icon youtube"
                    ></a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blacnk"
                        className="icon instagram"
                    ></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
