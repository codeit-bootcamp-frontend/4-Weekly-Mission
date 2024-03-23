import { ReactNode } from "react";
import * as S from "./IconStyle";

interface Props {
  id?: string;
  alt: string;
  image: string;
  url?: string;
  children?: ReactNode;
  size?: "large" | "small";
  onClick?: () => void;
}

const Icon = ({
  id,
  alt,
  url,
  image,
  size = "small",
  children,
  onClick,
}: Props) => {
  return (
    <S.IconBox
      id={id}
      href={url}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
    >
      <S.Icon size={size} src={image} alt={alt} />
      <S.IconText>{children}</S.IconText>
    </S.IconBox>
  );
};

export default Icon;
