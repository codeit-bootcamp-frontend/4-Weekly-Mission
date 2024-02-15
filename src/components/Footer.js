import "styles/reset.css";
import "styles/defaultStyle.css";
import "components/Footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="corporate-information">©codeit - 2023</div>
			<div className="footer-privacy">
				<a href="pages/privacy.html">Privacy Policy</a>
				<a href="pages/faq.html">FAQ</a>
			</div>
			<div className="footer-social">
				<a href="https://www.facebook.com/" rel="noReferrer" target="_blank">
					<img src="footer_facebook.png" alt="to_Facebook" />
				</a>
				<a href="https://twitter.com/" rel="noReferrer" target="_blank">
					<img src="footer_X.png" alt="to_X" />
				</a>
				<a href="https://www.youtube.com/" rel="noReferrer" target="_blank">
					<img src="footer_youtube.png" alt="to_Youtube" />
				</a>
				<a href="https://www.instagram.com" rel="noReferrer" target="_blank">
					<img src="footer_instagram.png" alt="to_Instagram" />
				</a>
			</div>
		</footer>
	);
}
