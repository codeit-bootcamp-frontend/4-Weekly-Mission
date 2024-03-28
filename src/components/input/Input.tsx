import styles from './Input.module.scss';
import classNames from 'classnames/bind';

type InputType = {
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const cx = classNames.bind(styles);

const Input = ({ type = 'text', value, onChange, placeholder }: InputType) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cx('input')}
    />
  );
};

export default Input;
