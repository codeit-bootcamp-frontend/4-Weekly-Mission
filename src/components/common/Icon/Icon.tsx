import * as S from "./IconStyle";

interface Props {
  url: string;
  image: string;
  alt: string;
  size?: "large" | "small";
}

const Icon = ({ size = "small", url, image, alt }: Props) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <S.Icon size={size} src={image} alt={alt} />
    </a>
  );
};

export default Icon;
