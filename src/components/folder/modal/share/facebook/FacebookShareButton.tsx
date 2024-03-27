import { FacebookShareButton } from "react-share";
import ShareImgDiv from "../ShareImgDiv";
import { ShareButtonProps } from "../../../../../@types/Modal";

function FacebookShareBtn({ src, alt, text, shareUrl }: ShareButtonProps) {
  return (
    <>
      <FacebookShareButton url={shareUrl}>
        <ShareImgDiv src={src} alt={alt} text={text} />
      </FacebookShareButton>
    </>
  );
}
export default FacebookShareBtn;
