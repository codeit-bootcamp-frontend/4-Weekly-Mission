import { Button } from '../button/Button';
import modalStyles from './ModalBasic.module.css';
import closeImg from '../../../assets/close.png';
import { useEffect, useState } from 'react';

export function ModalBasic({ item, onClickOutside }) {
  const [contents, setContents] = useState('');

  useEffect(() => {
    setContents(item.contents);
  }, [item.contents]);

  const contentComponents = {
    edit: (
      <form>
        <input placeholder={item.placeholder} />
      </form>
    ),
    add: (
      <form>
        <input placeholder="내용 입력" />
      </form>
    ),
  };

  return (
    <div className={modalStyles.background} onClick={onClickOutside}>
      <div
        className={modalStyles.form}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={modalStyles.text}>
          <div className={modalStyles.title}>{item.title}</div>
          {item.subtitle && (
            <div className={modalStyles.subtitle}>{item.subtitle}</div>
          )}
        </div>
        {contentComponents[contents] || <></>}
        <Button isRed={item.isRed}>{item.button}</Button>
        <img
          className={modalStyles.close}
          src={closeImg}
          alt="닫기 버튼"
          onClick={onClickOutside}
        />
      </div>
    </div>
  );
}
