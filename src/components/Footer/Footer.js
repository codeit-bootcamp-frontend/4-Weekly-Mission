import "./Footer.css";

const SNS = [
  {
    name: "facebook",
    href: "https://www.facebook.com/",
    src: "/images/facebook.svg",
    alt: "facebook 홈페이지로 연결된 facebook 로고",
  },
  {
    name: "twitter",
    href: "https://twitter.com/",
    src: "/images/twitter.svg",
    alt: "twitter 홈페이지로 연결된 twitter 로고",
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/",
    src: "/images/youtube.svg",
    alt: "youtube 홈페이지로 연결된 youtube 로고",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    src: "/images/instagram.svg",
    alt: "instagram 홈페이지로 연결된 instagram 로고",
  },
];
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-items">
        <div className="Footer-copyright">codeit-2023</div>
        <div className="Footer-links">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <div className="Footer-sns">
          {SNS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.src} alt={link.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
