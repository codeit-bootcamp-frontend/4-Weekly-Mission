import * as S from "./TargetName.styled";

interface Props {
  children?: string;
}

const TargetName: React.FC<Props> = ({ children }) => {
  return <S.TargetName>{children}</S.TargetName>;
};

export default TargetName;
