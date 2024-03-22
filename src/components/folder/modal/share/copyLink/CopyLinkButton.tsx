import { ShareButtonProps } from "../../../../../@types/Modal";
import ShareImgDiv from "../ShareImgDiv";

function CopyLinkButton({ src, alt, text, shareUrl }: ShareButtonProps) {
  const handleCopyClipBoard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("클립보드에 링크가 복사되었어요.");
  };
  return (
    <>
      <ShareImgDiv
        src={src}
        alt={alt}
        text={text}
        handleClick={() => handleCopyClipBoard(shareUrl)}
      />
    </>
  );
}
export default CopyLinkButton;
