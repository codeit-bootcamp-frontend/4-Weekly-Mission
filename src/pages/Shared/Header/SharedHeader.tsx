import * as S from "./SharedHeaderStyle";

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface User {
  id?: number;
  name?: string;
  owner?: Owner;
}

interface Props {
  userData: User;
}

const SharedHeader = ({ userData }: Props) => {
  return (
    <S.Container>
      <S.Image src={userData.owner?.profileImageSource} />
      <S.Owner>{userData.owner?.name}</S.Owner>
      <S.Folder>{userData.name}</S.Folder>
    </S.Container>
  );
};

export default SharedHeader;
