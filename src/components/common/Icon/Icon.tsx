import { ReactNode } from "react";
import * as S from "./IconStyle";

interface Props {
  url?: string;
  onClick?: () => void;
  image: string;
  alt: string;
  children?: ReactNode;
  size?: "large" | "small";
}

const Icon = ({
  size = "small",
  url,
  image,
  alt,
  children,
  onClick,
}: Props) => {
  return (
    <S.IconBox href={url} onClick={onClick} target="_blank" rel="noreferrer">
      <S.Icon size={size} src={image} alt={alt} />
      <S.IconText>{children}</S.IconText>
    </S.IconBox>
  );
};

export default Icon;
