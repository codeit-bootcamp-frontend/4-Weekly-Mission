import { FacebookShareButton } from "react-share";
import ShareImgDiv from "../ShareImgDiv";

function FacebookShareBtn({ src, alt, text, shareUrl }) {
  return (
    <>
      <FacebookShareButton url={shareUrl}>
        <ShareImgDiv src={src} alt={alt} text={text} />
      </FacebookShareButton>
    </>
  );
}
export default FacebookShareBtn;
