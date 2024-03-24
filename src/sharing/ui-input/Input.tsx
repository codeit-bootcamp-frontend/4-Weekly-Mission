import styles from "./Input.module.scss";
import classNames from "classnames/bind";

interface Props {
  // type: any;
  // value: any;
  // onChange: any;
  // placeholder: any;
}

const cx = classNames.bind(styles);

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
}: Props) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cx("input")}
    />
  );
};
