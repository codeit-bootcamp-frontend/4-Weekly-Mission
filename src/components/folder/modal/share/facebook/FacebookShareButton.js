import { FacebookShareButton } from "react-share";
import ShareImgButton from "../ShareImgButton";

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
