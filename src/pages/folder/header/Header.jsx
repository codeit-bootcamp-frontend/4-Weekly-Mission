import { Button } from '../../../components/ui/button/Button';
import * as S from './Header.style';
import linkIcon from '../../../assets/folder/link.svg';

const Headar = () => {
  return (
    <header>
      <S.Container>
        <form className="add-link-bar">
          <div className="input-box">
            <img src={linkIcon} alt="폴더 링크 이미지" />
            <input type="text" placeholder="링크를 추가해 보세요." />
          </div>
          <Button width={'8rem'} $padding={'10px 16px'} fontSize={'1.4rem'}>
            추가하기
          </Button>
        </form>
      </S.Container>
    </header>
  );
};

export default Headar;
