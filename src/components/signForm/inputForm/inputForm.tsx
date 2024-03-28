import styles from './inputForm.module.scss';
import classNames from 'classnames/bind';
import Input from '../Input/Input';

const cx = classNames.bind(styles);

const InputForm = ({ signType = false }) => {
  return (
    <div className={cx('inputForm')}>
      <Input type="text" labelText="이메일" placeholder="내용 입력" />
      <Input type="password" labelText="비밀번호" placeholder="비밀번호를 입력하세요" />
      {signType && (
        <Input type="password" labelText="비밀번호 확인" placeholder="비밀번호를 입력하세요" />
      )}
    </div>
  );
};

export default InputForm;
