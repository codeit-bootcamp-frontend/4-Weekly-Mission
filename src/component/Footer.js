import "../style/footer.css";
import facebookIcon from "../image/facebook.svg";
import twitterIcon from "../image/twitter.svg";
import youtubeIcon from "../image/youtube.svg";
import instagramIcon from "../image/instagram.svg";

function Footer() {
  const SNS_LIST = [
    { name: "facebook", href: "https://www.facebook.com", src: facebookIcon },
    { name: "twitter", href: "https://twitter.com", src: twitterIcon },
    { name: "youtube", href: "https://youtube.com", src: youtubeIcon },
    {
      name: "instagram",
      href: "https://www.instagram.com",
      src: instagramIcon,
    },
  ];

  return (
    <footer>
      <div class="footer_frame">
        <div class="maker">©codeit - 2023</div>
        <div class="sub">
          <a href="./privacy.html">Privacy Policy</a>
          <a href="./faq.html">FAQ</a>
        </div>
        <div class="icons">
          {SNS_LIST.map(({ name, href, src }) => {
            return (
              <a key={name} href={href}>
                <img
                  className="icon"
                  src={src}
                  alt={`${name} icon`}
                  width="20"
                  height="20"
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
