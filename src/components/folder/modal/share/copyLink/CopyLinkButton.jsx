import ShareImgDiv from "../ShareImgDiv";

function CopyLinkButton({ src, alt, text, shareUrl }) {
  const handleCopyClipBoard = async (text) => {
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
