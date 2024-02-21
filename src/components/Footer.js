import "./Footer.css";
import facebook from "../assets/svg/icon_facebook.svg";
import twitter from "../assets/svg/icon_twitter.svg";
import youtube from "../assets/svg/icon_youtube.svg";
import instagram from "../assets/svg/icon_instagram.svg";

function Footer() {
  const icons = [
    { id: 1, name: "facebook", url: "https://www.facebook.com/", img: { facebook } },
    { id: 2, name: "twitter", url: "https://twitter.com/", img: { twitter } },
    { id: 3, name: "youtube", url: "https://www.youtube.com/", img: { youtube } },
    { id: 4, name: "instagram", url: "https://www.instagram.com/", img: { instagram } },
  ];

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="codeIt">
          <p>©codeit - 2023</p>
        </div>
        <div className="privacy">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <div className="external_link">
          {icons.map((icon) => (
            <a
              className="icon"
              key={icon.id}
              href={icon.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={icon.img[icon.name]} alt={icon.name + " 아이콘"} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
