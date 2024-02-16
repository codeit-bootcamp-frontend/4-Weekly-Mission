import { CiShare1 } from 'react-icons/ci';
import { TiPencil } from 'react-icons/ti';
import { RiDeleteBinLine } from 'react-icons/ri';
import * as S from './FolderNavbar.styles';

const FolderNavbar = () => {
  return (
    <S.FolderNavbarLayout>
      <S.FolderNavbarItem>
        <CiShare1 />
        <span>공유</span>
      </S.FolderNavbarItem>
      <S.FolderNavbarItem>
        <TiPencil />
        <span>이름 변경</span>
      </S.FolderNavbarItem>
      <S.FolderNavbarItem>
        <RiDeleteBinLine />
        <span>삭제</span>
      </S.FolderNavbarItem>
    </S.FolderNavbarLayout>
  );
};

export default FolderNavbar;
