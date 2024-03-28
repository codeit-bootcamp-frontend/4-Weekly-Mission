import { Button } from '../button/Button';
import addLinkStyles from './AddLink.module.css';
import linkIcon from '../../../assets/link-icon.svg';

const AddLink: React.FC = () => {
  return (
    <div className={addLinkStyles.background}>
      <form className={addLinkStyles.form}>
        <input
          className={addLinkStyles.input}
          placeholder="링크를 추가해 보세요"
        />
        <img className={addLinkStyles.icon} src={linkIcon} alt="링크 아이콘" />
        <span className={addLinkStyles.button}>
          <Button width="small">추가하기</Button>
        </span>
      </form>
    </div>
  );
};

export { AddLink };
