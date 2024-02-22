import { FacebookShareButton } from "react-share";
import ShareImgButton from "../ShareImgButton";

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function FacebookShareBtn({ src, alt, text, folderId }) {
  const url = `https://eclectic-nougat-aebd58.netlify.app/shared/user=${folderId}`;
  // const url = window.location.href + `/shared/user=${folderId}`;
  return (
    <>
      <FacebookShareButton url={url}>
        <ShareImgButton src={src} alt={alt} text={text} />
      </FacebookShareButton>
    </>
  );
}
export default FacebookShareBtn;
