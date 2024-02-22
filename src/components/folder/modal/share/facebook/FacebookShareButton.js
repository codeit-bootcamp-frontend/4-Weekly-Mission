import { FacebookShareButton } from "react-share";
import ShareImgButton from "../ShareImgButton";

function FacebookShareBtn({ src, alt, text, folderId }) {
  const currentUrl = window.location.href;
  const shareUrl =
    currentUrl.replace("/folder", "") + `/shared/user=${folderId}`;
  return (
    <>
      <FacebookShareButton url={shareUrl}>
        <ShareImgButton src={src} alt={alt} text={text} />
      </FacebookShareButton>
    </>
  );
}
export default FacebookShareBtn;
