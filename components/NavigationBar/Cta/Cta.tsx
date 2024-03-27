import { PropsWithChildren } from "react";
import * as S from "./CtaStyled";

export const Cta = ({ children }: PropsWithChildren) => {
  return <S.CtaContainer>{children}</S.CtaContainer>;
};
